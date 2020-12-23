/**
 * @see https://adventofcode.com/2020/day/4
 */
export const part01 = function (input: string[]): number {
  const mandatoryKeys = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];
  let validCount = 0;
  for (const passport of input) {
    const valid = mandatoryKeys.every((k) => {
      return passport.includes(k);
    });
    if (valid) validCount += 1;
  }
  return validCount;
};

/**
 * @see https://adventofcode.com/2020/day/4#part2
 */
export const part02 = function (input: string[]): number {
  let validCount = 0;
  for (const passport of input) {
    const fields: { [name: string]: string } = {};
    const fieldsList = passport.split(/[\s\n]/);
    for (const kv of fieldsList) {
      const splitKv = kv.split(':');
      fields[splitKv[0]] = splitKv[1];
    }
    try {
      // Birth, Issue, Expiration years
      const byr = parseInt(fields.byr, 10);
      const iyr = parseInt(fields.iyr, 10);
      const eyr = parseInt(fields.eyr, 10);
      if (!(byr >= 1920 && byr <= 2002 && iyr >= 2010 && iyr <= 2020 && eyr >= 2020 && eyr <= 2030)) {
        throw Error;
      }
      // Height
      const hgt = fields.hgt;
      if (hgt.match(new RegExp(/^\d{3}cm$/))) {
        const cm = parseInt(hgt.split('cm')[0], 10);
        if (!(cm >= 150 && cm <= 193)) throw Error;
      } else if (hgt.match(new RegExp(/^\d{2}in$/))) {
        const inches = parseInt(hgt.split('in')[0], 10);
        if (!(inches >= 59 && inches <= 76)) throw Error;
      } else {
        throw Error;
      }
      // Hair colour
      const hcl = fields.hcl;
      if (!hcl.match(new RegExp(/^#[a-f,0-9]{6}$/))) throw Error;
      // Eye colour
      const ecl = fields.ecl;
      if (
        !(ecl == 'amb' || ecl == 'blu' || ecl == 'brn' || ecl == 'gry' || ecl == 'grn' || ecl == 'hzl' || ecl == 'oth')
      ) {
        throw Error;
      }
      // Passport id
      const pid = fields.pid;
      if (!pid.match(new RegExp(/^\d{9}$/))) throw Error;
      validCount += 1;
    } catch (err) {
      continue;
    }
  }
  return validCount;
};
