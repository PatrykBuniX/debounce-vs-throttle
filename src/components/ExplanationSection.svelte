<script lang="ts">
</script>

<section id="explanation-section">
  <div class="bg-pattern"></div>
  <article>
    <h2>How does it work?</h2>
    <h3>1. <span class="lightBlue">Introduction</span></h3>
    <p>
      If you are a software developer, you probably know that one of the most important things in
      developing a new product is performance. You are doing your best to make sure your app loads
      fast, each functionality is clear and simple to use and there are no bugs. You want the user to
      quickly and easily interact with it. It's clear that the fewer functions and request are called,
      the faster your app is.
    </p>
    <p>
      In this article, I will shortly describe two techniques you might use to reduce the number of
      your function calls caused by a user interacting with your page. Using them might make you
      calling heavy calculation functions or API requests less often. Let's dive into <a
        class="lightGreen"
        href="#debounce">debounce</a
      >
      and
      <a class="lightPink" href="#throttle">throttle</a>!
    </p>
    <h3 id="debounce">2. <span class="lightGreen">Debounce</span></h3>
    <p>
      Let your <strong>user stop interacting</strong> with the interface and then call the function - this
      is how I would describe debouncing a function in a single sentence.
    </p>
    <p>
      A practical use case of debounce is waiting until the user stops typing in input. This way you
      are not disturbing the user in typing and for example not displaying results the user doesn't
      want to see (If he wanted to see it, he would stop typing). It will reduce a number of
      unnecessary, heavy calculations or API requests.
    </p>
    <p>
      This is only one of many examples you can use debounce in - basically you will use it in event
      handlers that run frequently (keyboard and mouse events, window resizing, etc.).
    </p>
    <p>Let me explain implementation code line by line:</p>
    <ol>
      <li>
        Declare <pre>debouncedTimeoutId</pre>
        variable, we will assign timeout id (returned by setTimeout) to.
      </li>
      <li>
        Declare <pre>debounce</pre>
        function with two parameters:
        <ul>
          <li>
            <pre>func</pre>
            - function which will be delayed
          </li>
          <li>
            <pre>delay</pre>
            - delay - time (number value in milliseconds) after function will execute when user stops
            interacting
          </li>
        </ul>
      </li>
      <li>Clear timeout if it exists</li>
      <li>
        Assign new timeout id to <pre>debouncedTimeoutId</pre>
        variable and run given function after given delay (unless user will cause the function to run
        again - what will clear the timeout).
      </li>
    </ol>
    <h3 id="throttle">3. <span class="lightPink">Throttle</span></h3>
    <p>
      Let's start with single sentence again: While the user is interacting with the interface, call the
      function <strong>once in a given period of time</strong>.
    </p>
    <p>
      Throttle is about blocking a function from running for a specified time - some time has to
      elapse before it can be executed again. So, when the user is typing for a while, the function will
      run only if it's not blocked.
    </p>
    <p>
      With throttle, you can listen for continuous events (like scrolling or window resizing) and run
      your function less frequently.
    </p>
    <p>Line by line explanation:</p>
    <ol>
      <li>
        Declare <pre>throttleTimeoutId</pre>
        variable, we will assign timeout id (returned by setTimeout) to.
      </li>
      <li>
        Declare <pre>throttle</pre>
        function with two parameters:
        <ul>
          <li>
            <pre>func</pre>
            - function which will be delayed
          </li>
          <li>
            <pre>delay</pre>
            - delay - time (number value in milliseconds) after function will be able to run again
          </li>
        </ul>
      </li>
      <li>If there is running timeout - return (do nothing)</li>
      <li>Run the function.*</li>
      <li>
        Assign new timeout id to <pre>throttleTimeoutId</pre>
        variable and reset it (assign undefined to it) after given delay.
      </li>
    </ol>
    <p>
      *Some people will put a function call inside timeout callback function, but in my opinion it's
      better user experience when you run the function first and then block it, so you don't make the
      user wait.
    </p>
    <h3>4. <span class="lightBlue">Wrap it up!</span></h3>
    <p>
      I wanted to keep this article as short and simple as possible (I think that playing around
      with demo and reading implementation code is enough to understand these two techniques).
      Remember that I'm not a programming expert (nobody is) and you might find
      better implementation and explanation. I'm glad if it helped you understand/implement throttle
      or debounce. Thank you for visiting this article, keep learning!
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
    background-color: #333d42;
    position: relative;
    z-index: 1;
  }

  article {
    color: var(--white);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  h2 {
    font-size: var(--fontSizeH2);
    color: var(--white);
    padding-bottom: 2rem;
    text-align: center;
  }

  h3 {
    margin: 6rem 0 2rem 0;
    font-size: var(--fontSizeH3);
  }

  p {
    margin-top: 2rem;
    line-height: calc(var(--fontSizeText) * 1.4);
    font-size: var(--fontSizeText);
  }

  ol,
  ul {
    list-style-position: inside;
    margin: 3rem 0;
  }

  ol, ul {
    ol, ul{
      margin: 1rem 2rem;
    }
  }

  ol > li {
    margin: 1rem 0;
  }

  ul {
    margin-left: 2rem;
  }

  ul > li {
    margin: 0.5rem 0;
  }

  li {
    line-height: calc(var(--fontSizeText) * 1.4);
    font-size: var(--fontSizeText);
  }

  pre {
    color: var(--blue);
    margin: 0 0.5rem;
    font-style: italic;
    //color: var(--blue);
    display: inline-block;
  }
</style>
