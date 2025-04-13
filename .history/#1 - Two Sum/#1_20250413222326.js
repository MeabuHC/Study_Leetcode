/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) return [i, y];
    }
  }
};
