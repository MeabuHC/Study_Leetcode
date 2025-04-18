/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxOperations = (nums, k) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    let currentSum = nums[left] + nums[right];

    if (currentSum === k) {
      operations += 1;
      left += 1;
      right -= 1;
    } else if (currentSum < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return operations;
};
