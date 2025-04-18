/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Same operation with #2460 solution */
var moveZeroes = function (nums) {
  for (let i = 0, non_zero_idx = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      while (non_zero_idx < nums.length) {
        if (nums[non_zero_idx] !== 0) {
          nums[i] = nums[non_zero_idx];
          nums[non_zero_idx] = 0;
          non_zero_idx++;
          break;
        }
        non_zero_idx++;
      }

      if (non_zero_idx === nums.length) break;
    } else {
      non_zero_idx = i + 1;
    }
  }

  for (let i = 0, non_zero_idx = 0; i < nums.length; i++) {}
};
