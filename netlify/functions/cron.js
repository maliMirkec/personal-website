// Triggers a daily rebuild through the Netlify build hook.
import { schedule } from '@netlify/functions'

const build = async () => {
  try {
    const response = await fetch(process.env.BUILD_HOOK, { method: 'POST' })

    if (!response.ok) {
      throw new Error(`Build hook responded with ${response.status}`)
    }

    return { statusCode: 200, body: 'OK' }
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: 'Build hook failed.' }
  }
}

export const handler = schedule('@daily', build)
