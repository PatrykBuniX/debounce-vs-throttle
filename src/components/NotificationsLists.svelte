<script lang="ts">
  import type { Notification } from "../types";
  import CompareWithSelection from "./CompareWithSelection.svelte";
  import NotificationsList from "./NotificationsList.svelte";

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
  <CompareWithSelection bind:compareWith />
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
        <NotificationsList color="green" notifications={debouncedNotifications} />
      </div>
    {/if}
    <div class="list-wrapper">
      <NotificationsList color="blue" notifications={normalNotifications} />
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
        <NotificationsList color="pink" notifications={throttledNotifications} />
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
</style>
