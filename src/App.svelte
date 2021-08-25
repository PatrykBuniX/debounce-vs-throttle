<script lang="ts">
  import Heading from "./components/Heading.svelte";
  import TypeInput from "./components/TypeInput.svelte";
  import NotificationsLists from "./components/NotificationsLists.svelte";
  import { debounce, throttle } from "./utils";
  import type { Notification } from "./types";
  import CodeSection from "./components/CodeSection.svelte";

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
      text: `Input value: ${inputValue}`,
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
  <NotificationsLists
    {debouncedNotifications}
    {normalNotifications}
    {throttledNotifications}
    bind:debounceDelay
    bind:throttleDelay
  />
</main>
<CodeSection />

<style type="text/scss">
  main {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
