/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * This function checks whether there exists an increasing triplet subsequence
 * within the given array `nums`. An increasing triplet means there are indices
 * i < j < k such that nums[i] < nums[j] < nums[k].
 *
 * It maintains two variables:
 * - `firstNumber`: the smallest number seen so far.
 * - `secondNumber`: the smallest number greater than `firstNumber` seen so far.
 *
 * As the array is traversed:
 * - If a number is greater than `secondNumber`, it means we have found a triplet.
 * - If a number is greater than `firstNumber` but less than or equal to `secondNumber`,
 *   it becomes the new `secondNumber`.
 * - If a number is smaller than or equal to `firstNumber`, it becomes the new `firstNumber`.
 *
 * The function returns true if such a triplet is found, otherwise false.
 */

var increasingTriplet = function (nums) {
  var firstNumber = Infinity;
  var secondNumber = Infinity;

  for (var num of nums) {
    if (num > secondNumber) return true;
    else if (num > firstNumber) {
      secondNumber = num;
    } else {
      firstNumber = num;
    }
  }
  return false;
};
