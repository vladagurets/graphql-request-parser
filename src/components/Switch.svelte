<script>
    export let value;
    export let onChange;

    function _onChange({ target: { checked }}) {
      onChange(checked)
    }
</script>

<style>
  label {
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 0;
    right: 0;
    transform: scale(.5);
  }

  label input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--main-font-color);
    -webkit-transition: .4s;
    transition: .4s;
  }

  span:before {
    position: absolute;
    font-size: 20px;
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--main-bg-color);
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + span {
    background-color: var(--main-font-color);
  }

  input:focus + span {
    box-shadow: 0 0 1px var(--main-font-color);
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  span {
    border-radius: 34px;
  }

  span:before {
    border-radius: 50%;
  }
</style>

<label>
  <input type="checkbox" checked={value} on:input={_onChange}>
  <span />
</label>
