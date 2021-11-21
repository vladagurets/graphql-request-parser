<script>
  import Switch from './Switch.svelte';
  import { theme } from '../stores.js'
  import { DARK_THEME, LIGHT_THEME } from '../const.js'

  function onChange(checked) {
    theme.set(checked ? DARK_THEME : LIGHT_THEME)
  }

  theme.subscribe(value => {
    localStorage.setItem('theme', value)

    document.body.setAttribute('theme', value)
  })
</script>

<Switch value={$theme === DARK_THEME} onChange={onChange} />

