<script>
 	import Header from './components/Header.svelte';
  import SourceInput from './components/SourceInput.svelte';
  import FormattedInput from './components/FormattedInput.svelte';

  // TODO:
  // 1. Add popup with manual
  // 2. Add theme switcher
  // 3. Configure CI/CD
  // 4. Show code / variables label rotated on 90 deg
</script>

<style>
</style>

<div class="header">
  <Header/>
</div>
<div class="content-source">
  <SourceInput/>
</div>
<div class="content-formatted">
  <FormattedInput />
</div>
