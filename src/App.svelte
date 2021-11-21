<script>
 	import Header from './components/Header.svelte';
  import SourceInput from './components/SourceInput.svelte';
  import FormattedCode from './components/FormattedCode.svelte';

  // TODO:
  // 1. Add popup with manual
  // 2. Configure CI/CD
  // 3. Show code / variables label rotated on 90 deg
  // 4. Syntax highlight
  // 5. Parse input params (move each on next line)
</script>

<div class="header">
  <Header/>
</div>
<div class="content-source">
  <SourceInput/>
</div>
<div class="content-formatted">
  <FormattedCode />
</div>
