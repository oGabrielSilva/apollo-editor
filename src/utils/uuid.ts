export const uuid = () =>
  Date.now().toString(16) +
  Math.random().toString(32).slice(1).replace('.', '-') +
  '-' +
  Math.random().toString(36).slice(2);
