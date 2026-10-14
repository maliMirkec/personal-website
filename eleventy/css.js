// Compiles every entry stylesheet in src/css/ with PostCSS into <output>/css/.
// Runs on `eleventy.before`, so dev, build, and Netlify share one pipeline and
// compiled CSS never lands in the repo. Partials live in subfolders and are
// pulled in through @import.
import fs from 'node:fs/promises'
import path from 'node:path'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssMediaMinmax from 'postcss-media-minmax'
import postcssLogical from 'postcss-logical'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { setAssetHash } from './asset-hash.js'

const SRC_DIR = 'src/css'

/**
 * Build all entry stylesheets.
 * @param {string} outputDir Eleventy output directory.
 * @param {boolean} minify Minify the result (production).
 */
export const buildCss = async (outputDir, minify) => {
  const plugins = [postcssImport(), postcssMediaMinmax(), postcssLogical(), autoprefixer()]

  if (minify) {
    plugins.push(cssnano())
  }

  const processor = postcss(plugins)
  const outDir = path.join(outputDir, 'css')
  const entries = (await fs.readdir(SRC_DIR)).filter((file) => file.endsWith('.css'))

  await fs.mkdir(outDir, { recursive: true })

  await Promise.all(
    entries.map(async (file) => {
      const from = path.join(SRC_DIR, file)
      const to = path.join(outDir, file)
      const result = await processor.process(await fs.readFile(from, 'utf8'), { from, to })

      await fs.writeFile(to, result.css)
      setAssetHash(`/css/${file}`, result.css)
    }),
  )
}
