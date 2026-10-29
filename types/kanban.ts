export type IssueType = 'epic' | 'story' | 'task' | 'bug' | 'subtask'
export type IssueStatus = 'backlog' | 'todo' | 'in_progress' | 'review' | 'done'
export type IssuePriority = 'low' | 'medium' | 'high' | 'urgent'
export type Member = { id: number; name: string }
export type ProjectPermissions = { manage: boolean; collaborate: boolean; role: string | null }
export type Project = { id: number; name: string; description: string | null; project_key: string; archived_at: string | null }
export type ProjectContext = { project: Project; permissions: ProjectPermissions }
export type Column = { id: IssueStatus; label: string; color: string }
export type Label = { id: number; name: string; color: string }
export type IssueReference = { id: number; issue_key: string; issue_number: number; title: string; type: IssueType; status: IssueStatus }
export type IssueLink = { id: number; provider: string; external_id: string; title: string; url: string | null }
export type Sprint = { id: number; name: string; status: 'planned' | 'active' | 'completed' }
export type Issue = IssueReference & {
    kanban_project_id: number; description: string | null; priority: IssuePriority; stage: string | null
    start_date: string | null; due_date: string | null; resolved_at: string | null; story_points: number | null
    version: number; assignees: Member[]; labels: Label[]; editor: Member | null; position: number
    parent_id: number | null; epic_id: number | null; sprint_id: number | null
    parent: IssueReference | null; epic: IssueReference | null; sprint: Sprint | null; links: IssueLink[]
    comments_count: number; subtasks_count: number; created_at: string; updated_at: string
}
export type ActivityChange = { field: string; before: unknown; after: unknown }
export type Activity = {
    id: number; user: Member | null; action: string; card_title: string; from_status: string | null; to_status: string | null
    created_at: string; metadata: { changes?: ActivityChange[]; [key: string]: unknown } | null
}
export type IssueComment = { id: number; body: string; user: Member | null; created_at: string; edited_at: string | null }
export type IssueDetail = Issue & { creator: Member | null; comments: IssueComment[]; subtasks: Issue[]; activities: Activity[] }
export type Board = {
    permissions: ProjectPermissions; project: Project; cards: Issue[]; users: Member[]; online_users: Member[]
    activities: Activity[]; board_version: number; labels: Label[]; epics: IssueReference[]; sprints: Sprint[]
}
export type IssuePatch = Partial<{
    title: string; description: string | null; type: IssueType; status: IssueStatus; priority: IssuePriority
    start_date: string | null; due_date: string | null; story_points: number | null; epic_id: number | null
    assignee_ids: number[]; label_ids: number[]
}>
