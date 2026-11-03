import { test } from 'node:test'
import assert from 'node:assert/strict'
import { filterWork } from '../utils/myWork.ts'

const issue = (id, fields = {}) => ({ id, issue_key: `SYS-${id}`, title: `Tarea ${id}`, kanban_project_id: 1, project: { name: 'Operación' }, status: 'todo', priority: 'medium', due_date: null, updated_at: '2026-11-01', ...fields })
test('personal work combines project, status and accent-insensitive search without duplicate tasks', () => {
    const target = issue(1, { title: 'Revisión de diseño', status: 'review' })
    const items = [target, target, issue(2, { title: target.title }), issue(3, { title: target.title, status: 'review', kanban_project_id: 2 })]
    assert.deepEqual(filterWork(items, { search: 'revision', status: 'review', project: '1' }).map(x => x.id), [1])
    assert.equal(items.length, 4)
})
test('attention puts incomplete dated work ahead of undated work and completed tasks', () => {
    const items = [issue(1), issue(2, { due_date: '2026-11-04' }), issue(3, { due_date: '2026-11-01', status: 'done' }), issue(4, { due_date: '2026-11-02', priority: 'urgent' })]
    assert.deepEqual(filterWork(items, {}).map(x => x.id), [4, 2, 1, 3])
    assert.deepEqual(items.map(x => x.id), [1, 2, 3, 4])
})
test('recent activity orders by actual modification date and key search stays exact', () => {
    const items = [issue(1), issue(2, { updated_at: '2026-11-02' })]
    assert.deepEqual(filterWork(items, { sort: 'updated' }).map(x => x.id), [2, 1])
    assert.deepEqual(filterWork(items, { search: 'sys-2' }).map(x => x.id), [2])
    assert.deepEqual(filterWork(items, { project: '999' }), [])
})
