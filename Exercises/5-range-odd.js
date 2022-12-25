'use strict';

const rangeOdd = (start, end) => {
  const res = [];
  const len = end - start;
  if (len < 0) return res;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  return res;
};

console.log(rangeOdd(15, 30));
module.exports = { rangeOdd };
