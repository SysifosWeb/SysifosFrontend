import { test } from 'node:test'
import assert from 'node:assert/strict'
import { boardColumns, boardConfiguration, canTransition, matchesIssue, KANBAN_COLUMNS } from '../utils/kanban.ts'

test('uses API column labels, WIP and workflow with safe fallback for missing columns', () => {
    const columns = boardColumns([{ status: 'todo', label: 'Pendiente', wip: 0, color: '#123abc', transitions: ['in_progress', 'bogus'] }])
    assert.equal(columns.length, 5)
    assert.equal(columns[1].label, 'Pendiente')
    assert.equal(columns[1].wip, 0)
    assert.deepEqual(columns[1].transitions, ['in_progress'])
    assert.equal(columns[0].label, KANBAN_COLUMNS[0].label)
    assert.equal(boardColumns(null).length, 5)
    assert.equal(boardColumns([{ status: 'todo', label: '', wip: -1, color: 'url(evil)' }])[1].color, KANBAN_COLUMNS[1].color)
})

test('workflow allows legacy movement and same-state reordering but honors empty outgoing rules', () => {
    assert.equal(canTransition(boardColumns(null), 'todo', 'done'), true)
    const columns = boardColumns([{ status: 'todo', transitions: [] }])
    assert.equal(canTransition(columns, 'todo', 'done'), false)
    assert.equal(canTransition(columns, 'todo', 'todo'), true)
})

test('settings initialize independent defaults and retain explicit blocked transitions', () => {
    const first = boardConfiguration({}, { todo: [] })
    const second = boardConfiguration()
    assert.deepEqual(first.transitions.todo, [])
    first.columns.todo.label = 'Custom'
    assert.notEqual(second.columns.todo.label, 'Custom')
    assert.equal(second.transitions.todo.length, 5)
})

test('all filters compose without losing exact issue-key searches', () => {
    const issue = { issue_key: 'APP-12', title: 'Bug', description: '', assignees: [{ id: 1 }], priority: 'high', status: 'todo', type: 'bug', labels: [{ id: 2 }], epic_id: 3, sprint_id: 4 }
    const filters = { q: 'app-12', assignee: '1', priority: 'high', status: 'todo', type: 'bug', label: '2', epic: '3', sprint: '4' }
    assert.equal(matchesIssue(issue, filters), true)
    for (const key of ['label', 'epic', 'sprint']) assert.equal(matchesIssue(issue, { ...filters, [key]: '999' }), false)
    assert.equal(matchesIssue(issue, {}), true)
})
