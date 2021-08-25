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
    border-radius: var(--borderRadius);
  }

  code {
    font-size: 1.6rem;
  }
</style>
