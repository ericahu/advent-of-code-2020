const ROWS: number[] = [];
for (let i = 0; i < 128; i++) ROWS.push(i);
const COLS: number[] = [];
for (let i = 0; i < 8; i++) COLS.push(i);

const find = function (input: string, lowerChar: string, higherChar: string, possibilities: number[]): number {
  const l = possibilities.length;
  const c = input[0];
  if (c == lowerChar) {
    const narrowerPossibilities = possibilities.slice(0, l / 2);
    if (narrowerPossibilities.length == 1) {
      return narrowerPossibilities[0];
    } else {
      return find(input.slice(1), lowerChar, higherChar, narrowerPossibilities);
    }
  } else if (c == higherChar) {
    const narrowerPossibilities = possibilities.slice(l / 2);
    if (narrowerPossibilities.length == 1) {
      return narrowerPossibilities[0];
    } else {
      return find(input.slice(1), lowerChar, higherChar, narrowerPossibilities);
    }
  } else {
    throw Error(`Invalid char input: "${c}"`);
  }
};

const boardingPassId = function (line: string) {
  const row = find(line.slice(0, 7), 'F', 'B', ROWS);
  const col = find(line.slice(7), 'L', 'R', COLS);
  const id = row * 8 + col;
  return id;
};

/**
 * @see https://adventofcode.com/2020/day/5
 */
export const part01 = function (input: string[]): number {
  let maxBoardingPassId = 0;
  for (const line of input) maxBoardingPassId = Math.max(boardingPassId(line), maxBoardingPassId);
  return maxBoardingPassId;
};

/**
 * @see https://adventofcode.com/2020/day/5#part2
 */
export const part02 = function (input: string[]): number {
  const seats = new Set();
  const seatCount = 128 * 8;
  for (let i = 0; i < seatCount; i++) seats.add(i);

  for (const line of input) {
    const id = boardingPassId(line);
    try {
      seats.delete(id);
    } catch (err) {
      console.error(err);
    }
  }
  const seatList = Array.from(seats);
  let prevSeat = seatList[0] as number;
  for (const s of seatList.slice(1)) {
    if ((s as number) - prevSeat == 1) {
      prevSeat = s as number;
    } else {
      return s as number;
    }
  }
  return 0;
};
