export function throttle<T extends any[]>(
  func: (...args: T) => void,
  delay: number
) {
  let throttleTimeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: T) {
    if (throttleTimeoutId) return;

    throttleTimeoutId = setTimeout(() => {
      func(...args);
      throttleTimeoutId = undefined;
    }, delay);
  };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
) {
  let debouncedTimeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(debouncedTimeoutId);
    debouncedTimeoutId = setTimeout(func.bind(null, ...args), delay);
  };
}
