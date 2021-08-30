<script lang="ts">
  import Prism from "prismjs";

  export let language: string = "javascript";
  export let code: string;

  $: {
    code = Prism.highlight(code, Prism.languages[language], language);
  }
</script>

<pre
  class="line-numbers">
      <code class={`language-${language}`}>
        {@html code.trim()}
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
