<script lang="ts">
  export let compareWith: "debounce" | "throttle";
</script>

<div class="comparewith-wrapper">
  <p>Compare with:</p>
  <div class="options-wrapper">
    <div class="option-wrapper">
      <input
        bind:group={compareWith}
        type="radio"
        name="compareWith"
        id="compareWithDebounce"
        value="debounce"
      />
      <label class="lightGreen" for="compareWithDebounce">debounce</label>
    </div>
    <div class="option-wrapper">
      <input
        bind:group={compareWith}
        type="radio"
        name="compareWith"
        id="compareWithThrottle"
        value="throttle"
      />
      <label class="lightPink" for="compareWithThrottle">throttle</label>
    </div>
  </div>
</div>

<style type="text/scss">
  .comparewith-wrapper {
    margin: 0 auto 2rem auto;
    font-size: var(--fontSizeText);
    p {
      color: var(--white);
      margin-bottom: 1rem;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .options-wrapper {
    display: flex;
    align-items: center;
  }

  .option-wrapper {
    align-items: center;
    display: flex;
    &:last-child {
      margin-left: 1rem;
    }
    label {
      margin-left: 0.5rem;
    }
  }
</style>
