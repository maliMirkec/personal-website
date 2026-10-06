// Escapes values placed into generated HTML by shortcodes and filters.

const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }

/**
 * Escape a value for use in HTML text or a double-quoted attribute.
 * @param {unknown} value
 * @returns {string}
 */
export const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ENTITIES[char])
