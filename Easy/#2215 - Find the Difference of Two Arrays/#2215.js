/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  var nums1Ans = new Set();
  for (let element of nums1) {
    if (!nums2.includes(element)) {
      nums1Ans.add(element);
    }
  }

  var nums2Ans = new Set();
  for (let element of nums2) {
    if (!nums1.includes(element)) {
      nums2Ans.add(element);
    }
  }

  return [Array.from(nums1Ans), Array.from(nums2Ans)];
};
