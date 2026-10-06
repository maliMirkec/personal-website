import { test, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { initFn, cssTimeMs } from '../src/js/modules/helpers.js'

afterEach(() => {
  delete globalThis.window
  delete globalThis.requestIdleCallback
  delete globalThis.document
  delete globalThis.getComputedStyle
})

test('initFn uses requestIdleCallback with a timeout when available', () => {
  const calls = []
  globalThis.window = { requestIdleCallback: true }
  globalThis.requestIdleCallback = (fn, options) => calls.push([fn, options])
  const feature = () => {}

  initFn(feature)

  assert.equal(calls.length, 1)
  assert.equal(calls[0][0], feature)
  assert.deepEqual(calls[0][1], { timeout: 2000 })
})

test('initFn falls back to setTimeout', async () => {
  globalThis.window = {}

  await new Promise((resolve) => initFn(resolve))
})

const stubToken = (value) => {
  globalThis.document = { documentElement: {} }
  globalThis.getComputedStyle = () => ({ getPropertyValue: () => value })
}

test('cssTimeMs reads milliseconds', () => {
  stubToken(' 111ms')
  assert.equal(cssTimeMs('--tr-111'), 111)
})

test('cssTimeMs converts seconds', () => {
  stubToken('0.5s')
  assert.equal(cssTimeMs('--tr'), 500)
})

test('cssTimeMs returns 0 for missing tokens', () => {
  stubToken('')
  assert.equal(cssTimeMs('--missing'), 0)
})
