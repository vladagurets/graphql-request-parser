import { DARK_THEME, LIGHT_THEME } from './const'

export function debounce (func, timeout) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, timeout)
  }
}

export function initDefaultTheme () {
  const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  return localStorage.getItem('theme') || (isSystemDark ? DARK_THEME : LIGHT_THEME)
}
