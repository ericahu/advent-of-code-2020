import * as day01 from '../lib/day01';
import * as day02 from '../lib/day02';
import * as day03 from '../lib/day03';
import * as day04 from '../lib/day04';
import * as day05 from '../lib/day05';
import * as day06 from '../lib/day06';
import { getInput } from '../lib/util';

describe('Day 1', () => {
  const sampleInput = ['1721', '979', '366', '299', '675', '1456'];
  const input = getInput('../input/day01.in');

  it('Passes part 1 (sample)', () => {
    const output = day01.part01(sampleInput);
    expect(output).toBe('514579');
  });
  it('Passes part 1', () => {
    const output = day01.part01(input);
    expect(output).toBe('1006875');
  });
  it('Passes part 2 (sample)', () => {
    const output = day01.part02(sampleInput);
    expect(output).toBe('241861950');
  });
  it('Passes part 2', () => {
    const output = day01.part02(input);
    expect(output).toBe('165026160');
  });
});

describe('Day 2', () => {
  const sampleInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
  const input = getInput('../input/day02.in');

  it('Passes part 1 (sample)', () => {
    const output = day02.part01(sampleInput);
    expect(output).toBe(2);
  });
  it('Passes part 1', () => {
    const output = day02.part01(input);
    expect(output).toBe(625);
  });
  it('Passes part 2 (sample)', () => {
    const output = day02.part02(sampleInput);
    expect(output).toBe(1);
  });
  it('Passes part 2', () => {
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
  const input = getInput('../input/day03.in');

  it('Passes part 1 (sample)', () => {
    const output = day03.part01(sampleInput);
    expect(output).toBe(7);
  });
  it('Passes part 1', () => {
    const output = day03.part01(input);
    expect(output).toBe(216);
  });
  it('Passes part 2 (sample)', () => {
    const output = day03.part02(sampleInput);
    expect(output).toBe(336);
  });
  it('Passes part 2', () => {
    const output = day03.part02(input);
    expect(output).toBe(6708199680);
  });
});

describe('Day 4', () => {
  const sampleInput1 = [
    'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm',
    'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929',
    'hcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm',
    'hcl:#cfa07d eyr:2025 pid:\niyr:2011 ecl:brn hgt:59in',
  ];
  const input = getInput('../input/day04.in', '\n\n');

  it('Passes part 1 (sample)', () => {
    const output = day04.part01(sampleInput1);
    expect(output).toBe(2);
  });
  it('Passes part 1', () => {
    const output = day04.part01(input);
    expect(output).toBe(219);
  });
  const sampleInput2 = [
    'eyr:1972 cid:100\nhcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926',
    'iyr:2019\nhcl:#602927 eyr:1967 hgt:170cm\necl:grn pid:012533040 byr:1946',
    'hcl:dab227 iyr:2012\necl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277',
    'hgt:59cm ecl:zzz\neyr:2038 hcl:74454a iyr:2023\npid:3556412378 byr:2007',
    'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\nhcl:#623a2f',
    'eyr:2029 ecl:blu cid:129 byr:1989\niyr:2014 pid:896056539 hcl:#a97842 hgt:165cm',
    'hcl:#888785\nhgt:164cm byr:2001 iyr:2015 cid:88\npid:545766238 ecl:hzl\neyr:2022',
    'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719',
  ];
  it('Passes part 2 (sample)', () => {
    const output1 = day04.part02(sampleInput1);
    expect(output1).toBe(2);
    const output2 = day04.part02(sampleInput2);
    expect(output2).toBe(4);
  });
  it('Passes part 2', () => {
    const output = day04.part02(input);
    expect(output).toBe(127);
  });
});

describe('Day 5', () => {
  const sampleInput = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL', 'FBFBBFFRLR', 'FBFBBFFRLR'];
  const input = getInput('../input/day05.in');

  it('Passes part 1 (sample)', () => {
    const output = day05.part01(sampleInput);
    expect(output).toBe(820);
  });
  it('Passes part 1', () => {
    const output = day05.part01(input);
    expect(output).toBe(965);
  });
  it('Passes part 2', () => {
    const output = day05.part02(input);
    expect(output).toBe(524);
  });
});

describe('Day 6', () => {
  const sampleInput = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b'];
  const input = getInput('../input/day06.in', '\n\n');

  it('Passes part 1 (sample)', () => {
    const output = day06.part01(sampleInput);
    expect(output).toBe(11);
  });
  it('Passes part 1', () => {
    const output = day06.part01(input);
    expect(output).toBe(6335);
  });
  it('Passes part 2 (sample)', () => {
    const output = day06.part02(sampleInput);
    expect(output).toBe(6);
  });
  it('Passes part 2', () => {
    const output = day06.part02(input);
    expect(output).toBe(3392);
  });
});
