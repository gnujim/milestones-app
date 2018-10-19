import chroma from 'chroma-js';

export const colorForTopic = (count: number, index: number, y: number) => {
  // #b3c2ff to #4f4f87 (228 - 240) blues
  // #ffb3ec to #874f6e (315 - 327) purpley pink
  // #b3ffb3 to #4f875a (120 - 132) greens
  // yellows
  // oranges

  // #b3c2ff to #4f6f87 (228 - 206) blues
  // #ffb3ec to #814f87 (315 - 293) purpley pink
  // #b3ffb3 to #64874f (120 - 98) greens

  const colorPairs: String[][] = [
    ['#b3c2ff', '#4f4f87'],
    ['#ffb3ec', '#874f6e'],
    ['#b3ffb3', '#4f875a'],
    ['#fff', '#Fff'],
    ['#fff', '#fff'],
  ];

  // HARDCODE 5 COLORS
  const colors = chroma
    .scale(colorPairs[index])
    .mode('lch')
    .colors(count);

  return chroma(colors[y]);
};

export const calculateAge = (age: number) => {
  return age === 0 ? 'newborn' : age > 18 ? `${age / 12} yrs` : `${age} mos`;
};

export const milestoneSplit = (milestone: string) => {
  return milestone.split('\n');
};
