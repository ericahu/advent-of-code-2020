import * as fs from 'fs';
import * as path from 'path';

export const getInput = function (filename: string, delimiter = '\n'): string[] {
  const filePath = path.join(__dirname, filename);
  try {
    const inputList = fs.readFileSync(filePath, 'utf8').toString().split(delimiter);
    const l = inputList.length;
    if (inputList[l - 1] == '') {
      return inputList.slice(0, l - 1);
    }
    return inputList;
  } catch (err) {
    console.error(`Failed to get input for "${filePath}"`, err);
    throw err;
  }
};

export const output = function (filename: string, data: string): void {
  const filePath = path.join(__dirname, filename);
  try {
    fs.writeFileSync(filePath, data);
  } catch (err) {
    console.error(`Failed to output data to file "${filePath}"`, err);
    throw err;
  }
};
