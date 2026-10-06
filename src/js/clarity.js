// Microsoft Clarity loader. Included only in production builds via
// _components/_assets/analytics.liquid and loaded with `defer`.

const PROJECT_ID = 'h59io4yrcn'

window.clarity =
  window.clarity ||
  ((...args) => {
    ;(window.clarity.q = window.clarity.q || []).push(args)
  })

const $script = document.createElement('script')
$script.async = true
$script.src = `https://www.clarity.ms/tag/${PROJECT_ID}`
document.head.append($script)
