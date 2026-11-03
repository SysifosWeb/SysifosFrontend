import type { Issue } from '../types/kanban'

export type WorkView = 'assigned' | 'overdue' | 'upcoming' | 'recently_modified' | 'created_by_me'
export type WorkIssue = Issue & { project?: { name?: string; project_key?: string }; status_label?: string }
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es')

export function filterWork(issues: WorkIssue[], options: { search?: string; project?: string; status?: string; sort?: string }) {
    const search = normalize(options.search?.trim() || '')
    const priorities: Record<string, number> = { urgent: 0, high: 1, medium: 2, low: 3 }
    const date = (issue: WorkIssue) => issue.due_date || '9999-12-31'
    return [...new Map(issues.map(issue => [issue.id, issue])).values()].filter(issue =>
        (!options.project || String(issue.kanban_project_id) === options.project)
        && (!options.status || issue.status === options.status)
        && (!search || normalize([issue.issue_key, issue.title, issue.project?.name, issue.project?.project_key].filter(Boolean).join(' ')).includes(search))
    ).sort((a, b) => {
        const updated = () => (b.updated_at || '').localeCompare(a.updated_at || '') || a.id - b.id
        if (options.sort === 'updated') return updated()
        if (options.sort === 'due') return date(a).localeCompare(date(b)) || updated()
        return Number(a.status === 'done') - Number(b.status === 'done')
            || date(a).localeCompare(date(b))
            || (priorities[a.priority] ?? 2) - (priorities[b.priority] ?? 2)
            || updated()
    })
}
