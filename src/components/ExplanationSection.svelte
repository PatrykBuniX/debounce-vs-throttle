<script lang="ts">
  import PrismCode from "./PrismCode.svelte";
</script>

<section id="explanation-section">
  <article>
    <h2>How it works?</h2>
    <h3>1. <span class="lightBlue">Introduction</span></h3>
    <p>
      If you are developer, you propably know that one of the most important things in developing
      new product is performance. You are doing your best to make sure your app loads fast, each
      functionality is clear and simple to use and there is no bugs. You want the user to quickly
      and easly interact with it. It's clear that the less functions and request are called, the
      faster your app is.
    </p>
    <p>
      In this article I will describe two techniques you might use to reduce the number of your
      function calls, what might make you calling heavy calculation functions or API requests less
      often. Let's dive into <a class="lightGreen" href="#debounce">debounce</a> and
      <a class="lightPink" href="#throttle">throttle</a>!
    </p>
    <h3 id="debounce">2. <span class="lightGreen">Debounce</span></h3>
    <p>
      Let your <strong>user stop interacting</strong> with interface and then call the function - this
      is how I would describe debouncing a function in single sentence.
    </p>
    <h3 id="throttle">2. <span class="lightPink">Throttle</span></h3>
    <p>
      While user is interacting with the interface, call the function <strong
        >once in a given period of time</strong
      >.
    </p>
  </article>
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
    padding-bottom: 2rem;
    text-align: center;
  }

  article {
    color: var(--white);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  h3 {
    margin: 2rem 0;
    font-size: 2.8rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
</style>
