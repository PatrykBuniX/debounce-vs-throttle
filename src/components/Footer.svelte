<footer>
  <p>
    <span>
      Created by <a href="https://github.com/PatrykBuniX/">@patrykbunix</a>.
    </span>
    <span>
      If you like it, you can star <a href="https://github.com/PatrykBuniX/debounce-vs-throttle"
        >this repo</a
      >!
    </span>
    <span>
      If you would like to add/fix something - feel free to open an issue or create a pull request!
    </span>
  </p>
</footer>

<style type="text/scss">
  footer {
    padding: 2rem;
  }

  p {
    font-size: var(--fontSizeText);
    color: var(--white);
    display: flex;
    flex-direction: column;

    span {
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }

  a {
    color: var(--lightBlue);

    &:hover {
      color: var(--lightPink);
    }
  }
</style>
