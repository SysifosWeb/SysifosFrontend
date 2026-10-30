import type { ComputedRef } from 'vue'
import type { Board, Issue, IssuePatch, IssueReference, IssueStatus, Label, Member, Project, ProjectContext, ProjectPermissions, Sprint, Activity } from '~/types/kanban'
import { KANBAN_COLUMNS, boardColumns } from '~/utils/kanban'

export function useKanbanBoard(projectId: ComputedRef<number>, planning = false) {
    const api = useApi()
    const projectContext = useState<ProjectContext | null>('admin-active-project', () => null)
    const project = ref<Project | null>(null)
    const permissions = ref<ProjectPermissions>({ manage: false, collaborate: false, role: null })
    const lists = reactive<Record<IssueStatus, Issue[]>>({ backlog: [], todo: [], in_progress: [], review: [], done: [] })
    const users = ref<Member[]>([])
    const online = ref<Member[]>([])
    const labels = ref<Label[]>([])
    const epics = ref<IssueReference[]>([])
    const epicCards = ref<Issue[]>([])
    const sprints = ref<Sprint[]>([])
    const activities = ref<Activity[]>([])
    const columns = ref(boardColumns(undefined))
    const columnCounts = ref<Partial<Record<IssueStatus, number>>>({})
    const wipWarnings = ref<IssueStatus[]>([])
    const loading = ref(true)
    const busy = ref(false)
    const dragging = ref(false)
    const suspended = ref(false)
    const connected = ref(false)
    const retryable = ref(true)
    const notice = ref('')
    const canWrite = computed(() => connected.value && permissions.value.collaborate)
    let revision = -1
    let fetching = false
    let queued = false
    let epoch = 0
    let disposed = false
    let timer: ReturnType<typeof setInterval> | undefined

    async function refresh(force = false): Promise<void> {
        if (disposed) return
        if (fetching) { queued ||= force; return }
        if (!force && (busy.value || dragging.value || suspended.value)) return
        fetching = true
        const started = epoch
        const id = projectId.value
        try {
            const { data } = await api.request<{ data: Board }>(planning ? 'kanban/backlog' : 'kanban/board', { query: { project_id: id } })
            if (disposed || started !== epoch || dragging.value || id !== projectId.value) return
            if (data?.project?.id !== id || !Array.isArray(data.cards) || !Array.isArray(data.users) || typeof data.board_version !== 'number') {
                throw new Error('KANBAN_INVALID_RESPONSE')
            }
            project.value = data.project
            permissions.value = data.permissions
            projectContext.value = { project: data.project, permissions: data.permissions }
            users.value = data.users; online.value = data.online_users; activities.value = data.activities
            labels.value = data.labels || []; epics.value = data.epics || []; sprints.value = data.sprints || []
            epicCards.value = data.epic_cards || []
            columns.value = boardColumns(data.columns); columnCounts.value = data.column_counts || {}; wipWarnings.value = data.wip_warnings || []
            if (force || revision !== data.board_version) {
                for (const column of KANBAN_COLUMNS) lists[column.id] = data.cards.filter(card => card.status === column.id)
                revision = data.board_version
            }
            connected.value = true; retryable.value = true; notice.value = ''
        } catch (error) {
            if (disposed || started !== epoch || id !== projectId.value) return
            connected.value = false
            permissions.value = { manage: false, collaborate: false, role: null }
            const status = apiStatus(error)
            if ([401, 403, 404, 419].includes(status)) {
                for (const column of KANBAN_COLUMNS) lists[column.id] = []
                project.value = null; activities.value = []; online.value = []; users.value = []; labels.value = []; epics.value = []; sprints.value = []
                epicCards.value = []
                projectContext.value = null
                columns.value = boardColumns(undefined); columnCounts.value = {}; wipWarnings.value = []
            }
            retryable.value = ![403, 404].includes(status)
            notice.value = error instanceof Error && error.message === 'KANBAN_INVALID_RESPONSE'
                ? 'La API respondió con un formato inesperado. Comprueba la versión del backend.'
                : apiErrorMessage(error, 'No se pudo contactar con el Kanban. Comprueba la conexión y vuelve a intentar.')
        } finally {
            fetching = false
            if (!disposed && started === epoch) loading.value = false
            if (queued) { queued = false; await refresh(true) }
        }
    }

    function applyIssue(issue: Issue) {
        if (issue.kanban_project_id !== projectId.value) return
        for (const column of KANBAN_COLUMNS) lists[column.id] = lists[column.id].filter(card => card.id !== issue.id)
        if (!issue.parent_id && lists[issue.status]) {
            lists[issue.status].push(issue)
            lists[issue.status].sort((a, b) => a.position - b.position || a.id - b.id)
        }
        revision = -1
    }

    async function move(issue: Issue, status: IssueStatus, beforeId: number | null = null) {
        if (busy.value || !canWrite.value) return
        busy.value = true; epoch++; revision = -1
        const id = projectId.value
        let failure = ''
        try {
            await api.request(`kanban/cards/${issue.id}/move`, {
                method: 'PUT', query: { project_id: id },
                body: { status, before_id: beforeId, expected_version: issue.version },
            })
        } catch (error) { failure = apiErrorMessage(error) }
        finally {
            busy.value = false; dragging.value = false
            await refresh(true)
            if (!disposed && id === projectId.value && failure) notice.value = failure
        }
    }

    async function updateIssue(issue: Issue, patch: IssuePatch) {
        if (busy.value || !canWrite.value) return
        busy.value = true; epoch++; revision = -1
        const id = projectId.value
        let failure = ''
        try {
            const { data } = await api.request<{ data: Issue }>(`kanban/cards/${issue.id}`, {
                method: 'PUT', query: { project_id: id }, body: { ...patch, expected_version: issue.version },
            })
            if (id === projectId.value && !disposed) applyIssue(data)
        } catch (error) { failure = apiErrorMessage(error) }
        finally {
            busy.value = false
            await refresh(true)
            if (!disposed && id === projectId.value && failure) notice.value = failure
        }
    }

    function startDrag() { dragging.value = true; epoch++ }
    async function planIssue(issue: Issue, sprintId: number | null, beforeId: number | null = null) {
        if (busy.value || !canWrite.value) return
        const boardVersion = revision
        busy.value = true; epoch++; revision = -1
        const id = projectId.value
        let failure = ''
        try {
            await api.request(`kanban/cards/${issue.id}/plan`, { method: 'PUT', query: { project_id: id },
                body: { sprint_id: sprintId, before_id: beforeId, expected_version: issue.version, expected_board_version: boardVersion } })
        } catch (error) { failure = apiErrorMessage(error) }
        finally {
            busy.value = false
            await refresh(true)
            if (!disposed && id === projectId.value && failure) notice.value = failure
        }
    }
    function resetProject() {
        epoch++; revision = -1; loading.value = true; connected.value = false; retryable.value = true; notice.value = ''
        project.value = null; projectContext.value = null
        permissions.value = { manage: false, collaborate: false, role: null }
        for (const column of KANBAN_COLUMNS) lists[column.id] = []
        users.value = []; online.value = []; activities.value = []; labels.value = []; epics.value = []; sprints.value = []
        epicCards.value = []
        columns.value = boardColumns(undefined); columnCounts.value = {}; wipWarnings.value = []
        void refresh(true)
    }
    watch(projectId, resetProject)
    onMounted(() => {
        void refresh()
        timer = setInterval(() => { if (retryable.value && document.visibilityState === 'visible') void refresh() }, 15000)
    })
    onBeforeUnmount(() => { clearInterval(timer); disposed = true; epoch++ })

    return { project, permissions, lists, users, online, labels, epics, sprints, activities, loading, busy, dragging, suspended,
        connected, retryable, notice, canWrite, columns, columnCounts, wipWarnings, epicCards, refresh, applyIssue, move, updateIssue, planIssue, startDrag }
}
