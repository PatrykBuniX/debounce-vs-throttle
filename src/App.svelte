<script lang="ts">
  import Heading from "./components/Heading.svelte";
  import TypeInput from "./components/TypeInput.svelte";
  import NotificationsLists from "./components/NotificationsLists.svelte";
  import { debounce, throttle } from "./utils";
  import type { Notification } from "./types";

  let inputValue = "";

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

  function handleInput(e: Event) {
    const { value } = <HTMLInputElement>e.currentTarget;
    const newNotification = {
      id: Math.random().toString(36).substr(2, 9),
      text: `Input value: ${value}`,
    };

    debounce(() => {
      debouncedNotifications = [newNotification, ...debouncedNotifications];
      setTimeout(() => {
        debouncedNotifications = deleteNotification(debouncedNotifications, newNotification.id);
      }, 5000);
    }, 1000);

    normalNotifications = [newNotification, ...normalNotifications];
    setTimeout(() => {
      normalNotifications = deleteNotification(normalNotifications, newNotification.id);
    }, 5000);

    throttle(() => {
      throttledNotifications = [newNotification, ...throttledNotifications];
      setTimeout(() => {
        throttledNotifications = deleteNotification(throttledNotifications, newNotification.id);
      }, 5000);
    }, 1000);
  }
</script>

<main>
  <Heading />
  <TypeInput {inputValue} {handleInput} />
  <NotificationsLists {debouncedNotifications} {normalNotifications} {throttledNotifications} />
</main>

<style type="text/scss">
  main {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
