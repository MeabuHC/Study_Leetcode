/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const set = new Set(map.values());

  return set.size === map.size;
};
