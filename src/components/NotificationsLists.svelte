<script lang="ts">
  import type { Notification } from "../types";
  import CompareWithSelection from "./CompareWithSelection.svelte";
  import DelayInput from "./DelayInput.svelte";
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
        <DelayInput name="Debounce" color="green" bind:delay={debounceDelay} />
        <NotificationsList color="green" notifications={debouncedNotifications} />
      </div>
    {/if}
    <div class="list-wrapper">
      <NotificationsList color="blue" notifications={normalNotifications} />
    </div>
    {#if windowWidth >= 768 || compareWith === "throttle"}
      <div class="list-wrapper">
        <DelayInput name="Throttle" color="pink" bind:delay={throttleDelay} />
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
</style>
