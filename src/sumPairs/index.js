/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  const numbers = new Set();
  const solution = new Map();
  A.forEach((element) => numbers.add(element));
  A.forEach((element) => {
    const diff = N - element;
    if (diff !== element) {
      const foundNumber = numbers.has(diff);
      if (foundNumber) {
        solution.set(Math.min(element, diff), Math.max(element, diff));
      }
    }
  });
  return [...solution];
}

module.exports = sumPairs;
