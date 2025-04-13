/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  // Second pass: shift all non-zero numbers to the left.
  // For each zero in the array, find the next non-zero element and swap them.
  // This ensures that all non-zero elements are pushed to the front
  // while keeping their relative order, and all zeros are moved to the end.
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (var y = i + 1; y < nums.length; y++) {
        if (nums[y] !== 0) {
          nums[i] = nums[y];
          nums[y] = 0;
          break;
        }
      }
    }
  }

  return nums;
};
