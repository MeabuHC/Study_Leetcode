/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * This function performs two passes over the input array:
 * 1. **First pass**: Combines adjacent equal numbers by multiplying them and setting the second number to zero.
 * 2. **Second pass**: Uses a pointer (`non_zero_idx`) to track the index of the next non-zero element and shifts all non-zero elements to the left,
 *    while maintaining their relative order. Zeros are moved to the right.
 *
 * The `non_zero_idx` pointer starts at the beginning of the array. During the second pass:
 * - If a zero is encountered, it looks ahead for the next non-zero number.
 * - When a non-zero number is found, it swaps the current zero with the non-zero number, then moves the pointer to the next potential non-zero element.
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

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

  return nums;
};
