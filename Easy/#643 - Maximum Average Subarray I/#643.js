/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  var sum = 0;

  // Compute initial window sum
  for (var i = 0; i < k; i++) {
    sum += nums[i];
  }

  var maxSum = sum;

  for (var i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
