export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 1000
) => {
  let timerId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>): void => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => fn(...args), delay);
  };
};
