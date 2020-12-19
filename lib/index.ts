import * as day01 from './day01';
import { getInput, output } from './util';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Which day are we running? [1,1]: ', (answer) => {
  switch (answer) {
    case '1.1':
      const input = getInput('./../input/day01_1.in');
      const answer = day01.part01(input);
      output('../output/day01_1.out', answer);
      break;
    case '1.2':
      console.log(day01.part02(getInput('./../input/day01_2.in')));
    default:
      console.log('Invalid day number. Exitting');
      break;
  }
  rl.close();
});
