/**
 * @param {number[]} nums
 * @return {number}
 */

/* Calculate total sums then minus with the left sums */
var countPartitions = function (nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  var leftSum = 0;
  var count = 0;

  for (var i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;

    if ((leftSum - rightSum) % 2 === 0) {
      count++;
    }
  }

  return count;
};
