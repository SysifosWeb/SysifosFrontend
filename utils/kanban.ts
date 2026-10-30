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
export const issueActivityVerbs: Record<string, string> = {
    created: 'creó', updated: 'actualizó', moved: 'movió', deleted: 'eliminó',
    project_updated: 'actualizó el proyecto', project_archived: 'archivó el proyecto', project_restored: 'recuperó el proyecto',
    member_updated: 'actualizó los miembros de', member_removed: 'retiró un miembro de',
    label_created: 'creó la etiqueta', label_updated: 'actualizó la etiqueta', label_deleted: 'eliminó la etiqueta',
    comment_created: 'comentó en', comment_updated: 'editó un comentario en', comment_deleted: 'eliminó un comentario en',
    sprint_changed: 'cambió el sprint de',
}
