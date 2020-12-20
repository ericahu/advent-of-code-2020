export interface IComponent {
  x: number;
  y: number;
  letter: string;
  password: string;
}

export const getComponents = function (line: string): IComponent {
  const splitLine = line.split(' ');
  const nums = splitLine[0].split('-');
  return {
    x: parseInt(nums[0], 10),
    y: parseInt(nums[1], 10),
    letter: splitLine[1].replace(':', ''),
    password: splitLine[2],
  };
};

/**
 * @see https://adventofcode.com/2020/day/2
 */
export const part01 = function (input: string[]): number {
  let validCount = 0;
  for (const line of input) {
    const c = getComponents(line);
    const re = new RegExp(c.letter, 'g');
    const strippedPassword = c.password.replace(re, '');
    const l = c.password.length - strippedPassword.length;
    if (l >= c.x && l <= c.y) validCount += 1;
  }
  return validCount;
};

/**
 *
 * @see https://adventofcode.com/2020/day/2#part2
 */
export const part02 = function (input: string[]): number {
  let validCount = 0;
  for (const line of input) {
    const c = getComponents(line);
    const matchX = c.password[c.x - 1] == c.letter;
    const matchY = c.password[c.y - 1] == c.letter;
    if (matchX != matchY) validCount += 1;
  }
  return validCount;
};
