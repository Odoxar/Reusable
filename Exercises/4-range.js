'use strict';

const range = (start, end) => {
  const res = [];
  const len = end - start;
  if (len < 0) return res;
  for (let i = start; i <= end; i++) {
    res.push(i);
  }
  return res;
};

console.log(range(1, 3));

module.exports = { range };
