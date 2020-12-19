/**
 * @see https://adventofcode.com/2020/day/1
 */
export const part01 = function (input: string[]): string {
  for (const x of input) {
    const intX = parseInt(x, 10);
    for (const y of input) {
      const intY = parseInt(y, 10);
      if (intX + intY == 2020) {
        return (intX * intY).toString();
      }
    }
  }
  throw Error('Failed to find answer');
};

/**
 * @see https://adventofcode.com/2020/day/1#part2
 */
export const part02 = function (input: string[]): string {
  for (const x of input) {
    const intX = parseInt(x, 10);
    for (const y of input) {
      const intY = parseInt(y, 10);
      for (const z of input) {
        const intZ = parseInt(z, 10);
        if (intX + intY + intZ == 2020) {
          return (intX * intY * intZ).toString();
        }
      }
    }
  }
  throw Error('Failed to find answer');
};
