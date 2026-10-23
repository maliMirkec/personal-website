import eleventyConfig from '../../.eleventy.js'
import { netlifyHandler } from 'staticrafter/hosted'

export default netlifyHandler({ eleventyConfig })

export const config = { path: '/api/designer/*' }
