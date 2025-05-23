/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  for (var num of nums) {
    init = fn(init, num);
  }
  return init;
};
