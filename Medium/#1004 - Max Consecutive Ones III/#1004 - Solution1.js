/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* Brute Force */
/* Time limit exceed O(n^2) */
var longestOnes = function (nums, k) {
  var maxCount = 0;
  for (var i = 0; i < nums.length; i++) {
    var count = 0;
    var flip = k;
    for (var y = i; y < nums.length; y++) {
      if (nums[y] === 0 && flip > 0) {
        count++;
        flip--;
      } else if (nums[y] === 0 && flip === 0) break;
      else if (nums[y] === 1) {
        count++;
      }
    }

    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};
