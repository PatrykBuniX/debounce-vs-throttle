<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import type { Notification } from "../types";

  export let debouncedNotifications: Notification[];
  export let normalNotifications: Notification[];
  export let throttledNotifications: Notification[];

  export let debounceDelay: number;
  export let throttleDelay: number;

  let compareWith: "debounce" | "throttle" = "debounce";

  let windowWidth: number;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="notifications-wrapper">
  <div class="comparewith-wrapper">
    <p>Compare with:</p>
    <div class="options-wrapper">
      <div class="option-wrapper">
        <input
          bind:group={compareWith}
          type="radio"
          name="compareWith"
          id="compareWithDebounce"
          value="debounce"
        />
        <label class="lightGreen" for="compareWithDebounce">debounce</label>
      </div>
      <div class="option-wrapper">
        <input
          bind:group={compareWith}
          type="radio"
          name="compareWith"
          id="compareWithThrottle"
          value="throttle"
        />
        <label class="lightPink" for="compareWithThrottle">throttle</label>
      </div>
    </div>
  </div>
  <div class="lists-wrapper">
    {#if windowWidth >= 768 || compareWith === "debounce"}
      <div class="list-wrapper">
        <div class="input-wrapper">
          <label for="debounceDelay"><span class="lightGreen">Debounce</span> delay (ms):</label>
          <input
            bind:value={debounceDelay}
            type="number"
            name="debounceDelay"
            id="debounceDelay"
            min="0"
            max="100000"
            step="10"
          />
        </div>
        <ul class="debounced">
          {#each debouncedNotifications as item (item.id)}
            <li in:slide|local out:fade={{ duration: 500 }}>
              <h3>Debounced</h3>
              <p>{item.text}</p>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    <div class="list-wrapper">
      <ul class="normal">
        {#each normalNotifications as item (item.id)}
          <li in:slide|local out:fade={{ duration: 500 }}>
            <h3>Normal</h3>
            <p>{item.text}</p>
          </li>
        {/each}
      </ul>
    </div>
    {#if windowWidth >= 768 || compareWith === "throttle"}
      <div class="list-wrapper">
        <div class="input-wrapper">
          <label for="throttleDelay"><span class="lightPink">Throttle</span> delay (ms):</label>
          <input
            bind:value={throttleDelay}
            type="number"
            name="throttleDelay"
            id="throttleDelay"
            min="0"
            max="100000"
            step="10"
          />
        </div>
        <ul class="throttled">
          {#each throttledNotifications as item (item.id)}
            <li in:slide|local out:fade={{ duration: 500 }}>
              <h3>Throttled</h3>
              <p>{item.text}</p>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style type="text/scss">
  .notifications-wrapper {
    order: 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
      margin-top: 4rem;
    }
  }

  .comparewith-wrapper {
    margin: 0 auto 2rem auto;
    font-size: var(--fontSizeText);
    p {
      color: var(--white);
      margin-bottom: 1rem;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .options-wrapper {
    display: flex;
    align-items: center;
  }

  .option-wrapper {
    align-items: center;
    display: flex;
    &:last-child {
      margin-left: 1rem;
    }
    label {
      margin-left: 0.5rem;
    }
  }

  .lists-wrapper {
    justify-content: space-around;
    display: flex;
  }

  .list-wrapper {
    flex: 1;
    max-width: 350px;
    margin: 0 1rem;

    @media screen and (min-width: 768px) {
      margin: 0 2rem;
    }
  }

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

    &.debounced {
      &::-webkit-scrollbar-thumb {
        background-color: var(--green);
      }
      li {
        background-color: var(--lightGreen);
      }
    }
    &.normal {
      &::-webkit-scrollbar-thumb {
        background-color: var(--blue);
      }
      li {
        background-color: var(--lightBlue);
      }
    }
    &.throttled {
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
