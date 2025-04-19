/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * This function finds the pivot index in an array, where the sum of all elements to the left
 * of the index is equal to the sum of all elements to the right of the index.
 *
 * It uses two prefix sum arrays:
 * - `leftSum[i]` stores the sum of all elements before index `i` (not including `nums[i]`)
 * - `rightSum[i]` stores the sum of all elements after index `i` (not including `nums[i]`)
 *
 * Steps:
 * 1. Initialize `leftSum` and `rightSum` arrays with zeroes.
 * 2. Fill `leftSum` by accumulating values from the left side.
 * 3. Fill `rightSum` by accumulating values from the right side.
 * 4. Loop through each index to check if `leftSum[i] === rightSum[i]`.
 * 5. If such an index is found, return it as the pivot index.
 * 6. If no pivot index is found, return -1.
 */


var pivotIndex = function (nums) {
  const n = nums.length;
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);

  for (var i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  for (var i = n - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  for (var i = 0; i < n; i++) {
    if (leftSum[i] === rightSum[i]) return i;
  }

  return -1;
};
