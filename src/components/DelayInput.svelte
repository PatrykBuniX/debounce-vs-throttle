<script lang="ts">
  export let delay: number;
  export let name: string;
  export let color: "green" | "pink";
</script>

<div class="input-wrapper">
  <label for={`${name}Input`}><span class={`${color}Color`}>{name}</span> delay (ms):</label>
  <input
    bind:value={delay}
    type="number"
    name={`${name}Input`}
    id={`${name}Input`}
    min="0"
    max="100000"
    step="10"
  />
</div>

<style type="text/scss">
  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;

    label {
      text-align: center;
      font-size: var(--fontSizeText);
      color: var(--white);
    }

    input {
      margin-top: 1rem;
      background-color: var(--white);
      border-radius: var(--borderRadius);
      border: none;
      box-shadow: var(--boxShadowBottom);
      padding: 0.25rem 0.75rem;
      font-size: var(--fontSizeTextMedium);
      line-height: 2.2rem;
      color: var(--black);
      font-family: var(--montserrat);

      @media screen and (min-width: 768px) {
        padding: 0.7rem 1.8rem;
      }
    }
  }

  .greenColor {
    color: var(--lightGreen);
  }
  .pinkColor {
    color: var(--lightPink);
  }
</style>
