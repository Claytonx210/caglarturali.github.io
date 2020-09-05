import hello from '../data/hello.json';

/**
 * Says Hello in a random language.
 */
export const randomHello = (): string => {
  const randomInt = Math.floor(Math.random() * hello.length);
  return `${hello[randomInt].hello}!`;
};
