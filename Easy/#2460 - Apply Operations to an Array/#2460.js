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

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }

  return nums;
};
