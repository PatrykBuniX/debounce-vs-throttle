<script lang="ts">
  import Heading from "./Heading.svelte";
  import TypeInput from "./TypeInput.svelte";
  import NotificationsLists from "./NotificationsLists.svelte";
  import { debounce, throttle } from "../utils";
  import type { Notification } from "../types";

  let inputValue = "";
  let debounceDelay = 1000;
  let throttleDelay = 1000;

  let debouncedNotifications: Notification[] = [];
  let normalNotifications: Notification[] = [];
  let throttledNotifications: Notification[] = [];

  function deleteNotification(group: Notification[], id: string) {
    const removeIndex = group.findIndex((el) => el.id === id);
    if (removeIndex === -1) return;
    const newNotifications = [...group];
    newNotifications.splice(removeIndex, 1);
    return newNotifications;
  }

  function setDebouncedNotifications(newNotification: Notification){
    debouncedNotifications = [newNotification, ...debouncedNotifications];
    console.log(debouncedNotifications);
    setTimeout(() => {
      debouncedNotifications = deleteNotification(debouncedNotifications, newNotification.id);
    }, 5000);
  }

  function setThrottledNotifications(newNotification: Notification) {
    throttledNotifications = [newNotification, ...throttledNotifications];
    setTimeout(() => {
      throttledNotifications = deleteNotification(throttledNotifications, newNotification.id);
    }, 5000);
  }

  const debounced = debounce(setDebouncedNotifications, debounceDelay);
  const throttled = throttle(setThrottledNotifications, throttleDelay);

  function handleInput() {
    const newNotification = {
      id: Math.random().toString(36).substr(2, 9),
      text: inputValue,
    };

    debounced(newNotification);

    normalNotifications = [newNotification, ...normalNotifications];
    setTimeout(() => {
      normalNotifications = deleteNotification(normalNotifications, newNotification.id);
    }, 5000);

    throttled(newNotification);
  }
</script>

<main>
  <div class="bg-pattern"></div>
  <div class="content">
    <Heading />
    <TypeInput bind:inputValue {handleInput} />
    <p>
      <a href="#code-section">Implementation code</a> and
      <a href="#explanation-section">explanation</a> below.
    </p>
    <NotificationsLists
      {debouncedNotifications}
      {normalNotifications}
      {throttledNotifications}
      bind:debounceDelay
      bind:throttleDelay
    />
  </div>
</main>

<style type="text/scss">
  main {
    padding: 2rem;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      padding: 4rem;
    }
  }

  .content {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    order: 1;
    @media screen and (min-width: 768px) {
      order: 3;
    }
    margin-top: 4rem;
    text-align: center;
    font-size: var(--fontSizeText);
    line-height: 2rem;
    color: #ffffff;
    width: 100%;

    a {
      color: var(--white);

      &:hover {
        color: var(--lightBlue);
      }
    }
  }
</style>
