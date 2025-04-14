/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  // First pass: combine equal adjacent numbers
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  // Second pass: shift all non-zero numbers to the left
  // Maintain the relative order of non-zero elements
  for (let i = 0, non_zero_idx = 0; i < nums.length; i++) {
    // If the current element is zero
    if (nums[i] === 0) {
      // Look ahead to find the next non-zero element to swap with
      while (non_zero_idx < nums.length) {
        // When a non-zero element is found
        if (nums[non_zero_idx] !== 0) {
          // Swap the current zero with the found non-zero element
          nums[i] = nums[non_zero_idx];
          nums[non_zero_idx] = 0;

          // Move to the next non-zero index for the next iteration
          non_zero_idx++;
          break; // Break out of the loop since the swap is done
        }

        // If current element is still zero, continue moving to the next element
        non_zero_idx++;
      }

      // If we reach the end of the array and no more non-zero elements are found, stop
      if (non_zero_idx === nums.length) break;
    } else {
      // If the current element is non-zero, move the `non_zero_idx` to the next element
      non_zero_idx = i + 1;
    }
  }

  return nums;
};
