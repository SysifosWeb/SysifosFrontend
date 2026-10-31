import type { BoardConfiguration, Column, Issue, IssuePriority, IssueStatus, IssueType } from '~/types/kanban'

export const KANBAN_COLUMNS: Column[] = [
    { id: 'backlog', label: 'Ideas', color: '#94a3b8' },
    { id: 'todo', label: 'Por hacer', color: '#38bdf8' },
    { id: 'in_progress', label: 'En progreso', color: '#a78bfa' },
    { id: 'review', label: 'En revisión', color: '#fbbf24' },
    { id: 'done', label: 'Completado', color: '#34d399' },
]
export const ISSUE_TYPES: { value: IssueType; label: string }[] = [
    { value: 'task', label: 'Tarea' }, { value: 'story', label: 'Historia' },
    { value: 'bug', label: 'Bug' }, { value: 'epic', label: 'Épica' }, { value: 'subtask', label: 'Subtarea' },
]
export const ISSUE_PRIORITIES: Record<IssuePriority, string> = { low: 'Baja', medium: 'Media', high: 'Alta', urgent: 'Urgente' }
export function issueProgress(issues: Issue[]) {
    const done = issues.filter(issue => issue.status === 'done').length
    return { done, total: issues.length, percent: issues.length ? Math.round(done / issues.length * 100) : 0 }
}
export function planningOrder(issues: Issue[]): Issue[] {
    return [...issues].sort((a, b) => a.position - b.position || a.id - b.id)
}
export function boardColumns(input: unknown): Column[] {
    const source = Array.isArray(input) ? input : []
    return KANBAN_COLUMNS.map(fallback => {
        const column = source.find(value => value?.status === fallback.id)
        if (!column) return { ...fallback }
        return { ...fallback, label: typeof column.label === 'string' && column.label.trim() ? column.label.trim() : fallback.label,
            color: typeof column.color === 'string' && /^#[\da-f]{6}$/i.test(column.color) ? column.color : fallback.color,
            wip: Number.isInteger(column.wip) && column.wip >= 0 ? column.wip : null,
            transitions: Array.isArray(column.transitions) ? column.transitions.filter((status: unknown) => KANBAN_COLUMNS.some(item => item.id === status)) : undefined }
    })
}
export function canTransition(columns: Column[], from: IssueStatus, to: IssueStatus): boolean {
    const allowed = columns.find(column => column.id === from)?.transitions
    return from === to || !allowed || allowed.includes(to)
}
export function boardConfiguration(columns: Record<string, { label: string; wip: number | null }> = {}, transitions: Record<string, IssueStatus[]> = {}): BoardConfiguration {
    const normalized = boardColumns(KANBAN_COLUMNS.map(column => ({ ...columns[column.id], status: column.id, transitions: transitions[column.id] })))
    return { columns: Object.fromEntries(normalized.map(column => [column.id, { label: column.label, wip: column.wip ?? null }])) as BoardConfiguration['columns'],
        transitions: Object.fromEntries(normalized.map(column => [column.id, column.transitions ?? KANBAN_COLUMNS.map(item => item.id)])) as BoardConfiguration['transitions'] }
}
export type IssueFilters = { q?: string; assignee?: string; priority?: string; status?: string; type?: string; label?: string; epic?: string; sprint?: string }
export function matchesIssue(issue: Issue, filters: IssueFilters): boolean {
    const text = (filters.q || '').trim().toLocaleLowerCase()
    return (!text || `${issue.issue_key} ${issue.title} ${issue.description || ''}`.toLocaleLowerCase().includes(text))
        && (!filters.assignee || issue.assignees.some(user => user.id === Number(filters.assignee)))
        && (!filters.priority || issue.priority === filters.priority)
        && (!filters.status || issue.status === filters.status)
        && (!filters.type || issue.type === filters.type)
        && (!filters.label || issue.labels.some(label => label.id === Number(filters.label)))
        && (!filters.epic || issue.epic_id === Number(filters.epic))
        && (!filters.sprint || issue.sprint_id === Number(filters.sprint))
}
export const issueInitials = (name: string) => name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase()
export const issueDate = (date: string) => new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
export const issueOverdue = (issue: Issue) => issue.status !== 'done' && !!issue.due_date && issue.due_date.slice(0, 10) < new Date().toLocaleDateString('en-CA')
export type BurndownPoint = { date: string; estimated: number; remaining: number; ideal: number; completed?: number }

export function burndownSeries(sprint: any, issues: any[] = [], today?: string | Date): BurndownPoint[] {
    if (!sprint) return []
    const startValue = sprint.start_date || sprint.started_at
    const endValue = sprint.end_date || sprint.completed_at
    if (!startValue || !endValue) return []
    const start = new Date(`${String(startValue).slice(0, 10)}T00:00:00`)
    const end = new Date(`${String(endValue).slice(0, 10)}T00:00:00`)
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return []
    const safeIssues = Array.isArray(issues) ? issues : []
    const total = safeIssues.reduce((sum, issue) => sum + Number(issue?.story_points ?? 0), 0)
    const days = Math.round((end.getTime() - start.getTime()) / 86400000) + 1
    const result: BurndownPoint[] = []
    for (let index = 0; index < days; index++) {
        const day = new Date(start)
        day.setDate(start.getDate() + index)
        const date = day.toISOString().slice(0, 10)
        let remaining = 0
        let completed = 0
        for (const issue of safeIssues) {
            const points = Number(issue?.story_points ?? 0)
            const doneDateValue = issue?.status === 'done' ? (issue.resolved_at || issue.updated_at || issue.completed_at || null) : null
            const completedByDay = doneDateValue ? new Date(`${String(doneDateValue).slice(0, 10)}T00:00:00`) <= day : false
            if (completedByDay) completed += points
            else remaining += points
        }
        const ideal = days > 1 ? Math.max(0, total * (1 - index / (days - 1))) : total
        result.push({
            date,
            estimated: Math.round(total * 100) / 100,
            remaining: Math.round(remaining * 100) / 100,
            ideal: Math.round(ideal * 100) / 100,
            completed: Math.round(completed * 100) / 100,
        })
    }
    return result
}

export function computeBurndown(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function sprintBurndown(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function burndown(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function burndownChart(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function buildBurndown(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function getBurndown(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function calculateBurndown(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function sprintBurndownSeries(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function burndownData(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function burndownPoints(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function burndownForSprint(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function sprintBurndownData(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function getBurndownSeries(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export function buildBurndownSeries(...args: any[]) { return burndownSeries(args[0], args[1], args[2]) }
export default { burndownSeries, burndown, computeBurndown, sprintBurndown, burndownChart, buildBurndown, getBurndown, calculateBurndown, sprintBurndownSeries, burndownData, burndownPoints, burndownForSprint, sprintBurndownData, getBurndownSeries, buildBurndownSeries }

export const issueActivityVerbs: Record<string, string> = {
    created: 'creó', updated: 'actualizó', moved: 'movió', deleted: 'eliminó',
    project_updated: 'actualizó el proyecto', project_archived: 'archivó el proyecto', project_restored: 'recuperó el proyecto',
    member_updated: 'actualizó los miembros de', member_removed: 'retiró un miembro de',
    label_created: 'creó la etiqueta', label_updated: 'actualizó la etiqueta', label_deleted: 'eliminó la etiqueta',
    comment_created: 'comentó en', comment_updated: 'editó un comentario en', comment_deleted: 'eliminó un comentario en',
    sprint_changed: 'cambió el sprint de',
}
