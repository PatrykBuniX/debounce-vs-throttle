<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import type { Notification } from "../types";

  export let notifications: Notification[];
  export let color: "green" | "blue" | "pink";
</script>

<ul class={color}>
  {#each notifications as item (item.id)}
    <li in:slide|local out:fade={{ duration: 500 }}>
      <h3>Debounced</h3>
      <p>{item.text}</p>
    </li>
  {/each}
</ul>

<style type="text/scss">
  ul {
    width: 100%;
    list-style-type: none;
    height: 700px;
    overflow-y: auto;
    padding-right: 1rem;

    &::-webkit-scrollbar {
      width: 10px;
      padding-left: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: none;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: var(--borderRadius);
      border: 1px solid var(--black);
    }

    &.green {
      &::-webkit-scrollbar-thumb {
        background-color: var(--green);
      }
      li {
        background-color: var(--lightGreen);
      }
    }
    &.blue {
      &::-webkit-scrollbar-thumb {
        background-color: var(--blue);
      }
      li {
        background-color: var(--lightBlue);
      }
    }
    &.pink {
      &::-webkit-scrollbar-thumb {
        background-color: var(--pink);
      }
      li {
        background-color: var(--lightPink);
      }
    }

    li {
      width: 100%;
      padding: 1rem;
      box-shadow: var(--boxShadowBottom);
      border-radius: var(--borderRadius);
      margin: 2rem 0;

      background-color: var(--green);
      h3 {
        font-weight: bold;
        font-size: var(--fontSizeTextBig);
        line-height: 2.4rem;
        color: var(--black);
      }

      p {
        margin-top: 1.5rem;
        font-size: var(--fontSizeTextMedium);
        line-height: 2.2rem;
        color: var(--black);
        width: 100%;
        word-break: break-all;
      }
    }
  }
</style>
