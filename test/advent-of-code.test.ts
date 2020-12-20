import * as day01 from '../lib/day01';
import * as day02 from '../lib/day02';
import * as day03 from '../lib/day03';
import { getInput } from '../lib/util';

describe('Day 1', () => {
  const sampleInput = ['1721', '979', '366', '299', '675', '1456'];
  it('Passes part 1 (sample)', () => {
    const output = day01.part01(sampleInput);
    expect(output).toBe('514579');
  });
  it('Passes part 1', () => {
    const input = getInput('../input/day01.in');
    const output = day01.part01(input);
    expect(output).toBe('1006875');
  });
  it('Passes part 2 (sample)', () => {
    const output = day01.part02(sampleInput);
    expect(output).toBe('241861950');
  });
  it('Passes part 2', () => {
    const input = getInput('../input/day01.in');
    const output = day01.part02(input);
    expect(output).toBe('165026160');
  });
});

describe('Day 2', () => {
  const sampleInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
  it('Passes part 1 (sample)', () => {
    const output = day02.part01(sampleInput);
    expect(output).toBe(2);
  });
  it('Passes part 1', () => {
    const input = getInput('../input/day02.in');
    const output = day02.part01(input);
    expect(output).toBe(625);
  });
  it('Passes part 2 (sample)', () => {
    const output = day02.part02(sampleInput);
    expect(output).toBe(1);
  });
  it('Passes part 2', () => {
    const input = getInput('../input/day02.in');
    const output = day02.part02(input);
    expect(output).toBe(391);
  });
});

describe('Day 3', () => {
  const sampleInput = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];
  it('Passes part 1 (sample)', () => {
    const output = day03.part01(sampleInput);
    expect(output).toBe(7);
  });
  it('Passes part 1', () => {
    const input = getInput('../input/day03.in');
    const output = day03.part01(input);
    expect(output).toBe(216);
  });
  it('Passes part 2 (sample)', () => {
    const output = day03.part02(sampleInput);
    expect(output).toBe(336);
  });
  it('Passes part 2', () => {
    const input = getInput('../input/day03.in');
    const output = day03.part02(input);
    expect(output).toBe(6708199680);
  });
});
