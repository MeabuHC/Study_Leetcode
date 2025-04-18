/**
 * Finds the longest contiguous subarray containing only 1s after flipping at most k zeros.
 * Uses the sliding window technique to maintain a valid window with at most k flipped 0s.
 *
 * - Initialize a window with two pointers: `left` and `right`.
 * - Expand `right` pointer through the array.
 * - When a `0` is encountered, decrease `k` (representing a flip).
 * - If flips exceed `k`, shrink the window from the `left` until valid again.
 * - At each step, calculate and update the maximum window length.
 *
 * Time Complexity: O(n), where n is the length of the input array.
 * Space Complexity: O(1), constant extra space.
 *
 * @param {number[]} nums - Binary array of 0s and 1s.
 * @param {number} k - Maximum number of 0s allowed to flip.
 * @return {number} - Length of the longest valid subarray.
 */

var longestOnes = function (nums, k) {
  var left = 0;
  var maxLength = 0;

  for (var right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      k--;
    }

    while (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
