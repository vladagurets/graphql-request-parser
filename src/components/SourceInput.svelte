<script>
  import { sourceQuery } from '../stores.js'
</script>

<style>
  textarea {
    border-radius: 0;
    border: 4px solid transparent;
    font-size: 16px;
    height: 100%;
    outline: none;
    padding: 20px;
    resize: none;
    width: 100%;
    opacity: .7;
  }
  textarea:focus {
    border-color: var(--outline-focus-color);
  }
</style>

<textarea bind:value={$sourceQuery} placeholder="Put sources here"/>

