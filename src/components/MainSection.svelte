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

  function handleInput() {
    const newNotification = {
      id: Math.random().toString(36).substr(2, 9),
      text: inputValue,
    };

    debounce(() => {
      debouncedNotifications = [newNotification, ...debouncedNotifications];
      setTimeout(() => {
        debouncedNotifications = deleteNotification(debouncedNotifications, newNotification.id);
      }, 5000);
    }, debounceDelay);

    normalNotifications = [newNotification, ...normalNotifications];
    setTimeout(() => {
      normalNotifications = deleteNotification(normalNotifications, newNotification.id);
    }, 5000);

    throttle(() => {
      throttledNotifications = [newNotification, ...throttledNotifications];
      setTimeout(() => {
        throttledNotifications = deleteNotification(throttledNotifications, newNotification.id);
      }, 5000);
    }, throttleDelay);
  }
</script>

<main>
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
</main>

<style type="text/scss">
  main {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    @media screen and (min-width: 768px) {
      padding: 4rem;
    }
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
    text-align: center;
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
