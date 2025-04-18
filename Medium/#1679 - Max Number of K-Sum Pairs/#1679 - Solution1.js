/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * This function finds the maximum number of operations where each operation
 * consists of picking two numbers from the array that sum up to k.
 *
 * Approach:
 * - Use a Map to track the count of each number as we iterate through the array.
 * - For each number `num`, we check if its complement `(k - num)` exists in the map
 *   with a count greater than 0. If it does, we use that pair to perform an operation.
 * - If the complement is found, we decrement its count in the map and increment the operation count.
 * - If not, we store the current number in the map to potentially be used as a complement later.
 *
 * This approach ensures each pair is only used once and avoids extra passes over the data,
 * resulting in an efficient O(n) time solution.
 */

var maxOperations = function (nums, k) {
  var map = new Map();
  var operation = 0;

  for (var num of nums) {
    if (map.has(k - num) && map.get(k - num) > 0) {
      map.set(k - num, map.get(k - num) - 1);
      operation++;
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return operation;
};
