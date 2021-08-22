<script lang="ts">
  import { slide, fly, fade } from "svelte/transition";
  import type { Notification } from "../types";

  export let debouncedNotifications: Notification[];
  export let normalNotifications: Notification[];
  export let throttledNotifications: Notification[];
</script>

<div class="notifications-wrapper">
  <ul class="debounced">
    {#each debouncedNotifications as item (item.id)}
      <li in:slide|local out:fade={{ duration: 500 }}>
        <h3>Debounced</h3>
        <p>{item.text}</p>
      </li>
    {/each}
  </ul>
  <ul class="normal">
    {#each normalNotifications as item (item.id)}
      <li in:slide|local out:fade={{ duration: 500 }}>
        <h3>Normal</h3>
        <p>{item.text}</p>
      </li>
    {/each}
  </ul>
  <ul class="throttled">
    {#each throttledNotifications as item (item.id)}
      <li in:slide|local out:fade={{ duration: 500 }}>
        <h3>Throttled</h3>
        <p>{item.text}</p>
      </li>
    {/each}
  </ul>
</div>

<style type="text/scss">
  .notifications-wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 7rem;
    width: 100%;
    overflow: hidden;
  }

  ul {
    flex: 1;
    list-style-type: none;
    max-width: 350px;
    position: relative;
    margin: 0 2rem;

    &.debounced {
      li {
        background-color: var(--lightGreen);
      }
    }
    &.normal {
      li {
        background-color: var(--lightBlue);
      }
    }
    &.throttled {
      li {
        background-color: var(--lightPink);
      }
    }

    li {
      width: 100%;
      padding: 1rem;
      box-shadow: var(--boxShadow);
      border-radius: var(--borderRadius);
      margin: 2rem 0;

      background-color: var(--green);
      h3 {
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.4rem;
        color: var(--black);
      }

      p {
        margin-top: 1.5rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: var(--black);
        width: 100%;
        word-break: break-all;
      }
    }
  }
</style>
