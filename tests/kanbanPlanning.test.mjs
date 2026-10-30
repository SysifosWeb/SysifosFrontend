import { test } from 'node:test'
import assert from 'node:assert/strict'
import { issueProgress, planningOrder } from '../utils/kanban.ts'

test('epic progress counts completed direct issues including completed sprints', () => {
    assert.deepEqual(issueProgress([]), { done: 0, total: 0, percent: 0 })
    assert.deepEqual(issueProgress([{ status: 'done' }, { status: 'review' }, { status: 'todo' }]), { done: 1, total: 3, percent: 33 })
    assert.deepEqual(issueProgress([{ status: 'done' }]), { done: 1, total: 1, percent: 100 })
})

test('planning order is stable across states and does not mutate the source', () => {
    const issues = [{ id: 3, position: 2, status: 'todo' }, { id: 2, position: 1, status: 'review' }, { id: 1, position: 1, status: 'done' }]
    assert.deepEqual(planningOrder(issues).map(issue => issue.id), [1, 2, 3])
    assert.deepEqual(issues.map(issue => issue.id), [3, 2, 1])
})
