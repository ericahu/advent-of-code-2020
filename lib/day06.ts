/**
 * @see https://adventofcode.com/2020/day/6
 */
export const part01 = function (input: string[]): number {
  let sum = 0;
  for (const line of input) {
    const yesQuestionSet = new Set(line.replace(/\n/g, '').split(''));
    sum += yesQuestionSet.size;
  }
  return sum;
};

const intersect = function (inputs: string[][]): string[] {
  if (inputs.length == 1) {
    return inputs[0];
  } else {
    const partialIntersect = inputs[0].filter((value) => inputs[1].includes(value));
    return intersect([partialIntersect, ...inputs.slice(2)]);
  }
};

/**
 * @see https://adventofcode.com/2020/day/6#part2
 */
export const part02 = function (input: string[]): number {
  let sum = 0;
  for (const line of input) {
    const responseStrings = line.split('\n');
    const responseChars: string[][] = [];
    for (const s of responseStrings) {
      responseChars.push(s.split(''));
    }
    const set = new Set(intersect(responseChars));
    sum += set.size;
  }
  return sum;
};
