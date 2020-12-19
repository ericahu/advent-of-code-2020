import * as day01 from '../lib/day01';
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
