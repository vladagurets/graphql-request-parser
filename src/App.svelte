<script>
 	import Header from './components/Header.svelte';
  import SourceInput from './components/SourceInput.svelte';
  import FormattedCode from './components/FormattedCode.svelte';
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
