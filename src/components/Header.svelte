<script>
   import GithubIcon from './GithubIcon.svelte';
   import ThemeSwitch from './ThemeSwitch.svelte';
   import QuestionMarkIcon from './QuestionMarkIcon.svelte';

  function onChange (params) {
    console.log(params)
    
  }
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
    user-select: none;
  }

  .right {
    display: flex;
    align-items: center;
  }

  a {
    margin-right: 10px;
    text-decoration: none;
  }
</style>

<header>
  <h1>/GraphQL request parser/</h1>
  <div class='right'>
    <ThemeSwitch onChange={onChange}/>
    <a href='https://github.com/vladagurets/graphql-request-parser/blob/master/readme.md'>
      <QuestionMarkIcon />
    </a>
    <GithubIcon />
  </div>
</header>

