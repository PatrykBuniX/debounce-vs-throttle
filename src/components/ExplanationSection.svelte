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
    <div class="debounce">

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
      <p>Let's check what's happening in the code.</p>
      <p>We declare a <code>debounce</code> function which takes two arguments:</p>
      <ul>
        <li><code>func</code> - a function to debounce</li>
        <li><code>delay</code> - time (in ms) after the function can be called</li>
      </ul>
      <p>We declare a <code>debouncedTimeoutId</code> variable, with initial value of undefined, which is "closed" in <code>debounce</code> function (this way we are making sure it cannot be accessed from the outside - <a class="lightBlue" href="https://javascript.info/closure" target="_blank" rel="noreferrer noopener">more about closure</a>). We will assign a value returned from <code>setTimeout</code> (id number) to it.</p>
      <p>We return an anonymous function which will call our callback with the same arguments. The returned function clears the timeout with id of <code>debouncedTimeoutId</code> and sets another timeout storing its id in the same variable - this way our callback will run only if we stop calling debounced function for a given amount of time (<code>delay</code>). It won't be executed while we are spamming, because each time the event is fired, the timeout gets cleared.</p>
    </div>
    <div class="throttle">
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
      <p>This one might seem a bit more complicated, so let's dive into the code again:</p>
      <p>We declare a <code>throttle</code> function which takes two arguments:</p>
      <ul>
        <li><code>func</code> - a function to throttle</li>
        <li><code>delay</code> - time (in ms) after the function will be called</li>
      </ul>
      <p>We declare a <code>throttleTimeoutId</code> variable.
      <p>We return a function which will call our callback with the same arguments. But before actually running a function, we are checking whether it's already waiting to be called. If it's waiting, do nothing and let it execute first before being called again. After given time (<code>delay</code>) run the function again.</p>
    </div>
    <h3>4. <span class="lightBlue">Wrap it up!</span></h3>
    <p>
      I wanted to keep this article as short and simple as possible (I think that playing around
      with demo and reading implementation code is enough to understand these two techniques).
      Keep in mind that it's my implementation and you might find better code and explanation.
      I'm glad if it helped you understand/implement throttle
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
    margin: 1rem 0;
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

  code {
    color: var(--blue);
    margin: 0 0.5rem;
    font-style: italic;
    display: inline-block;
  }

  .debounce{
    code{
      color: var(--lightGreen);
    }
  }
  .throttle{
    code{
      color: var(--lightPink);
    }
  }

</style>
