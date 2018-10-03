import { parse } from 'papaparse';
import { readFileSync, writeFileSync } from 'fs';

const file = readFileSync('developmentalMilestones.csv', 'utf8');

const parsed: string[][] = parse(file, { header: false }).data;

// SEPERATE COLUMN TITLES AND MAKE CAMELCASE
const categories = parsed[0].slice(1).map(word => {
  // make camelcase in here
  return word;
});

// TRANSFORM DATA STRUCTURE
console.log(categories);
const appData = categories.map((title, index) => {
  return {
    category: title,
    milestones: parsed.slice(1).map(milestone => {
      return {
        milestone: {
          age: milestone[0],
          description: milestone[index + 1],
        },
      };
    }),
  };
});
console.log(JSON.stringify(appData, null, 2));

writeFileSync(`${__dirname}/devMilestones.json`, JSON.stringify(appData, null, 2), 'utf-8');

// read in csv file
// parse csv file and get raw data
// transform raw data into correct structure
// write transformed data to json file (done)
