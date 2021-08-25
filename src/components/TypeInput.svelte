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
  <p>
    <a href="#code-section">Implementation code</a> and
    <a href="#explanation-section">explanation</a> below.
  </p>
</div>

<style type="text/scss">
  .input-section {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }

  label {
    text-align: center;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: center;
    color: var(--lightBlue);
    width: 100%;
  }

  p {
    margin-top: 4rem;
    text-align: center;
    font-size: 1.6rem;
    line-height: 2rem;
    text-align: center;
    color: #ffffff;
    width: 100%;

    a {
      color: var(--white);

      &:hover {
        color: var(--lightBlue);
      }
    }
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
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: var(--black);
      font-family: var(--montserrat);
    }

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.8rem;
      line-height: 2.2rem;
      border: none;
      margin-left: 2rem;
      padding: 0.7rem 1.8rem;
      color: var(--black);
      border-radius: var(--borderRadius);
      box-shadow: var(--boxShadowBottom);
      font-family: var(--montserrat);
      background-color: var(--blue);
    }
  }
</style>
