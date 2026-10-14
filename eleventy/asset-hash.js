// Content hashes for the compiled CSS and JS, keyed by public URL
// (e.g. /css/style-2024.css). eleventy/css.js and eleventy/js.js record them
// on `eleventy.before`; the `assetUrl` filter appends them as `?v=` so the
// files can be cached as immutable (see assets/_headers).
import { createHash } from 'node:crypto'

const HASH_LENGTH = 8

const hashes = new Map()

/**
 * Short content hash.
 * @param {string | Uint8Array} content File content.
 * @returns {string}
 */
export const hashContent = (content) => createHash('sha256').update(content).digest('hex').slice(0, HASH_LENGTH)

/**
 * Record the hash of a compiled asset.
 * @param {string} url Public URL of the asset.
 * @param {string | Uint8Array} content File content.
 */
export const setAssetHash = (url, content) => {
  hashes.set(url, hashContent(content))
}

/**
 * Append the content hash to an asset URL. Unknown URLs are returned as is.
 * @param {string} url Public URL of the asset.
 * @returns {string}
 */
export const assetUrl = (url) => {
  const hash = hashes.get(url)

  return hash ? `${url}?v=${hash}` : url
}
