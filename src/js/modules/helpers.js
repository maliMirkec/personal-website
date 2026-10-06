// Shared front-end helpers, bundled into each entry by esbuild.

const IDLE_TIMEOUT_MS = 2000

/**
 * Run a non-critical feature when the browser is idle.
 * @param {() => void} fn Feature to run.
 */
export const initFn = (fn) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(fn, { timeout: IDLE_TIMEOUT_MS })
  } else {
    setTimeout(fn, 1)
  }
}

/**
 * Read a CSS time token (e.g. `--tr-111: 111ms`) from :root in milliseconds.
 * @param {string} name Custom property name.
 * @returns {number}
 */
export const cssTimeMs = (name) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const ms = parseFloat(value)

  if (Number.isNaN(ms)) {
    return 0
  }

  return value.endsWith('ms') ? ms : ms * 1000
}
