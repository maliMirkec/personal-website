import { test } from 'node:test'
import assert from 'node:assert/strict'
import { escapeHtml } from '../eleventy/escape.js'

test('escapes HTML special characters', () => {
  assert.equal(
    escapeHtml(`<a href="x" title='y'>&</a>`),
    '&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;&amp;&lt;/a&gt;',
  )
})

test('turns nullish values into an empty string', () => {
  assert.equal(escapeHtml(undefined), '')
  assert.equal(escapeHtml(null), '')
})

test('stringifies numbers', () => {
  assert.equal(escapeHtml(300), '300')
})
