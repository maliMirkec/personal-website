// Easter egg: a short vibration when the home page avatar is tapped.

const VIBRATION_MS = 200

export const avatar = () => {
  const $avatar = document.querySelector('.js-avatar')
  if (!$avatar || !('vibrate' in navigator)) {
    return
  }

  $avatar.addEventListener('click', () => navigator.vibrate(VIBRATION_MS))
}
