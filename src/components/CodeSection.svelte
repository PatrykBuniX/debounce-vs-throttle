<script lang="ts">
  import PrismCode from "./PrismCode.svelte";

  let withTypescript = false;

  $: debounceCode = `
let debouncedTimeoutId${withTypescript ? ": ReturnType<typeof setTimeout>" : ""};
function debounce(func${withTypescript ? ": () => void" : ""}, delay${
    withTypescript ? ": number" : ""
  }) {
  clearTimeout(debouncedTimeoutId);
  debouncedTimeoutId = setTimeout(func, delay);
}`;

  $: throttleCode = `
let throttleTimeoutId${withTypescript ? ": ReturnType<typeof setTimeout>" : ""};
function throttle(func${withTypescript ? ": () => void" : ""}, delay${
    withTypescript ? ": number" : ""
  }) {
  if (throttleTimeoutId) return;
  func();
  throttleTimeoutId = setTimeout(() => {
    throttleTimeoutId = undefined;
  }, delay);
}
`;
</script>

<section id="code-section">
  <div class="bg-pattern" />
  <article>
    <h2>Implementation code</h2>
    <div class="input-wrapper">
      <input
        bind:checked={withTypescript}
        type="checkbox"
        name="withTypescript"
        id="withTypescript"
      />
      <label for="withTypescript">with typescript</label>
    </div>
    <div class="code-wrapper">
      <div class="code debounce">
        <h3>Debounce</h3>
        <PrismCode code={debounceCode} />
      </div>
      <div class="code throttle">
        <h3>Throttle</h3>
        <PrismCode code={throttleCode} />
      </div>
    </div>
  </article>
</section>

<style type="text/scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10rem 2rem;
    background-color: #404c52;
    position: relative;
    z-index: 1;
  }

  article {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-wrapper {
    margin-top: 2rem;
    font-size: var(--fontSizeText);
    color: white;
    display: flex;
    align-items: center;

    label {
      margin-left: 1rem;
    }
  }

  h2 {
    text-align: center;
    font-size: var(--fontSizeH2);
    color: var(--white);
  }

  .code-wrapper {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .code {
    width: 100%;
    margin: 2rem 0;
    @media screen and (min-width: 768px) {
      width: auto;
      margin: 2rem;
      padding: 2rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

    &.debounce {
      h3 {
        color: var(--lightGreen);
      }
    }
    &.throttle {
      h3 {
        color: var(--lightPink);
      }
    }

    h3 {
      font-size: var(--fontSizeTextMedium);
      margin-bottom: 1rem;
    }
  }
</style>
