import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

const build = async (req, context) => {
  await fetch(process.env.BUILD_HOOK_MAIN, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return new Response('OK', {
    status: 200
  })
}

export const handler = schedule('@daily', build);
