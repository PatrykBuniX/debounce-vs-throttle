<script lang="ts">
  export let inputValue: string;
  export let handleInput: () => void;

  function handleResetClick() {
    inputValue = "";
  }
</script>

<div class="input-section">
  <label for="typeInput">Start typing in input below to fire events:</label>
  <div class="inputs-wrapper">
    <input
      bind:value={inputValue}
      on:input={handleInput}
      type="text"
      name="typeInput"
      id="typeInput"
      placeholder="Your text goes here..."
    />
    <button on:click={handleResetClick}>reset&nbsp;input</button>
  </div>
</div>

<style type="text/scss">
  .input-section {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    order: 2;
  }

  label {
    text-align: center;
    font-size: var(--fontSizeTextMedium);
    line-height: 2.2rem;
    text-align: center;
    color: var(--lightBlue);
    width: 100%;
  }

  .inputs-wrapper {
    margin-top: 2rem;
    position: relative;

    input {
      width: 100%;
      border-radius: var(--borderRadius);
      border: none;
      background: var(--white);
      box-shadow: var(--boxShadowBottom);
      padding: 0.7rem 1.8rem;
      font-size: var(--fontSizeTextMedium);
      line-height: 2.2rem;
      color: var(--black);
      font-family: var(--montserrat);
    }

    button {
      display: block;
      font-size: var(--fontSizeTextMedium);
      line-height: 2.2rem;
      border: none;
      color: var(--black);
      border-radius: var(--borderRadius);
      box-shadow: var(--boxShadowBottom);
      font-family: var(--montserrat);
      background-color: var(--blue);
      margin: 2rem auto 0 auto;
      padding: 0.25rem 0.75rem;

      @media screen and (min-width: 768px) {
        position: absolute;
        padding: 0.7rem 1.8rem;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 0 0 2rem;
      }
    }
  }
</style>
