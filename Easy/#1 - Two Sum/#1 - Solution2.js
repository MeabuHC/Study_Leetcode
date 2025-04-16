/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* Library */
var twoSum = function (nums, target) {
  var library = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (library[complement] !== undefined) {
      return [i, library[complement]];
    } else {
      library[nums[i]] = i;
    }
  }
};
