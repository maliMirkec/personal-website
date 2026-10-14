import { test } from 'node:test'
import assert from 'node:assert/strict'
import { assetUrl, hashContent, setAssetHash } from '../eleventy/asset-hash.js'

test('hashContent returns a short, stable hash', () => {
  assert.equal(hashContent('body{}'), hashContent('body{}'))
  assert.equal(hashContent('body{}').length, 8)
  assert.notEqual(hashContent('body{}'), hashContent('main{}'))
})

test('assetUrl appends the recorded hash', () => {
  setAssetHash('/css/test.css', 'body{}')

  assert.equal(assetUrl('/css/test.css'), `/css/test.css?v=${hashContent('body{}')}`)
})

test('assetUrl returns unknown URLs unchanged', () => {
  assert.equal(assetUrl('/css/missing.css'), '/css/missing.css')
})
