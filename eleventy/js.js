// Bundles every entry script in src/js/ with esbuild into <output>/js/ as an
// IIFE. Runs on `eleventy.before`, like eleventy/css.js. Shared code lives in
// src/js/modules/ and is pulled in through imports.
import fs from 'node:fs/promises'
import path from 'node:path'
import * as esbuild from 'esbuild'

const SRC_DIR = 'src/js'

/**
 * Build all entry scripts.
 * @param {string} outputDir Eleventy output directory.
 * @param {boolean} minify Minify the result (production).
 */
export const buildJs = async (outputDir, minify) => {
  const entries = (await fs.readdir(SRC_DIR)).filter((file) => file.endsWith('.js'))

  await esbuild.build({
    entryPoints: entries.map((file) => path.join(SRC_DIR, file)),
    outdir: path.join(outputDir, 'js'),
    bundle: true,
    format: 'iife',
    target: 'es2020',
    minify,
    logLevel: 'warning',
  })
}
