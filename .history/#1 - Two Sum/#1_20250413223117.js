/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Brute Force */

// var twoSum = function (nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var y = i + 1; y < nums.length; y++) {
//       if (nums[i] + nums[y] === target) return [i, y];
//     }
//   }
// };

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
