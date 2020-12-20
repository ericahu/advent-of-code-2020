/**
 * @see https://adventofcode.com/2020/day/3
 */
export const part01 = function (input: string[], right = 3, down = 1): number {
  const width = input[0].length;
  const height = input.length;
  let x = 0;
  let y = 0;
  let treeCount = 0;
  while (y < height) {
    if (input[y][x] == '#') {
      treeCount += 1;
    }
    x += right;
    y += down;
    if (x >= width) {
      x = x - width;
    }
  }
  return treeCount;
};

/**
 * @see https://adventofcode.com/2020/day/3#part2
 */
export const part02 = function (input: string[]): number {
  const a = part01(input, 1, 1);
  const b = part01(input, 3, 1);
  const c = part01(input, 5, 1);
  const d = part01(input, 7, 1);
  const e = part01(input, 1, 2);
  return a * b * c * d * e;
};
