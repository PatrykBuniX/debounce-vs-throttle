let throttleTimeoutId: ReturnType<typeof setTimeout>;
export function throttle(func: () => void, delay: number) {
  if (throttleTimeoutId) return;
  func();
  throttleTimeoutId = setTimeout(() => {
    throttleTimeoutId = undefined;
  }, delay);
}

let debouncedTimeoutId: ReturnType<typeof setTimeout>;
export function debounce(func: () => void, delay: number) {
  clearTimeout(debouncedTimeoutId);
  debouncedTimeoutId = setTimeout(() => {
    func();
  }, delay);
}
