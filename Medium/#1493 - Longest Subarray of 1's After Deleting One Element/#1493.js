/**
 * Finds the length of the longest subarray of 1s after deleting exactly one element.
 * This is similar to flipping 0s, but instead we are allowed to remove one element (usually a 0).
 *
 * - Uses a sliding window approach with two pointers: `left` and `right`.
 * - We maintain a window that contains at most one `0` (which we treat as the one removable element).
 * - When the count of zeros exceeds 1 (i.e., `removeTurn < 0`), we shrink the window from the left.
 * - At each step, we update the maximum valid subarray length.
 * - Note: we calculate `right - left` (not +1) because we are "removing" one element.
 *
 * Time Complexity: O(n), where n is the length of the input array.
 * Space Complexity: O(1), constant space used.
 *
 * @param {number[]} nums - Array of binary digits (0s and 1s).
 * @return {number} - Length of the longest subarray of 1s after deleting one element.
 */

var longestSubarray = function (nums) {
  var left = 0;
  var maxLength = 0;
  var removeTurn = 1;

  for (var right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      removeTurn--;
    }

    while (removeTurn < 0) {
      if (nums[left] === 0) {
        removeTurn++;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
};
