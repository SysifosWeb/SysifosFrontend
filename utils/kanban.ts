import type { Column, Issue, IssuePriority, IssueType } from '~/types/kanban'

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
