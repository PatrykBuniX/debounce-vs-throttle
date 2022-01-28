export function throttle<T extends any[]>(
  func: (...args: T) => void,
  delay: number
) {
  let throttleTimeoutId: ReturnType<typeof setTimeout>;

  return function (...args: T) {
    if (throttleTimeoutId) return;

    func(...args);

    throttleTimeoutId = setTimeout(() => {
      throttleTimeoutId = undefined;
    }, delay);
  };
}

export function debounce<T extends any[]>(
  func: (...args: T) => void,
  delay: number
) {
  let debouncedTimeoutId: ReturnType<typeof setTimeout>;

  return function (...args: T) {
    clearTimeout(debouncedTimeoutId);
    debouncedTimeoutId = setTimeout(func.bind(null, ...args), delay);
  };
}
