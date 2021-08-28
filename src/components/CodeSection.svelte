<script lang="ts">
  import PrismCode from "./PrismCode.svelte";

  const debounceCode = `
let debouncedTimeoutId: ReturnType<typeof setTimeout>;
function debounce(func: () => void, delay: number) {
  clearTimeout(debouncedTimeoutId);
  debouncedTimeoutId = setTimeout(func, delay);
}`;

  const throttleCode = `
let throttleTimeoutId: ReturnType<typeof setTimeout>;
export function throttle(func: () => void, delay: number) {
  if (throttleTimeoutId) return;
  func();
  throttleTimeoutId = setTimeout(() => {
    throttleTimeoutId = undefined;
  }, delay);
}
`;
</script>

<section id="code-section">
  <h2>Implementation code</h2>
  <div class="code-section-wrapper">
    <div class="code-section debounce">
      <h3>Debounce</h3>
      <PrismCode code={debounceCode} />
    </div>
    <div class="code-section throttle">
      <h3>Throttle</h3>
      <PrismCode code={throttleCode} />
    </div>
  </div>
</section>

<style type="text/scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10rem 2rem;
    max-width: 1440px;
  }

  h2 {
    font-size: 4rem;
    color: var(--white);
  }

  .code-section-wrapper {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .code-section {
    margin: 2rem;
    padding: 2rem;
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
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
</style>
