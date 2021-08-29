<script lang="ts">
  import { onMount } from "svelte";
  import Prism from "prismjs";

  export let language: string = "javascript";
  export let code: string;

  let ref: HTMLElement;
  onMount(async () => {
    Prism.highlightElement(ref);
  });
</script>

<pre
  class="line-numbers">
      <code bind:this={ref} class={`language-${language}`}>
        {code.trim()}
      </code>
</pre>

<style lang="scss">
  pre {
    width: 100%;
    overflow: auto;

    @media screen and (min-width: 768px) {
      border-radius: var(--borderRadius);
    }
  }

  code {
    font-size: var(--fontSizeText);
  }
</style>
