<script>
   import GithubIcon from './GithubIcon.svelte';
</script>

<style>
  header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 1.5em;
    font-weight: 600;
    opacity: .8;
    user-select: none;
  }
</style>

<header>
  <h1>/GraphQL query parcer/</h1>
  <div class='right'>
    <GithubIcon />
  </div>
</header>

