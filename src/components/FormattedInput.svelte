<script>
  const code = `
  <pre class="prettyprint lang-js">
    setTimeout(function(){
      console.log('deleting cookie');
    },1000);
  </pre>
  `
</script>

<style>
  div {
    flex: 1;
  }
</style>

<div>
  {@html code}
</div>

