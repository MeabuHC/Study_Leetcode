/**
 * Function: productExceptSelf
 *
 * Given an array of integers `nums`, this function returns an array `result`
 * where `result[i]` is the product of all elements in `nums` except `nums[i]`.
 *
 * The solution uses two passes:
 * 1. First pass: Builds a `leftProducts` array where each element at index `i`
 *    holds the product of all elements to the left of index `i`.
 *
 * 2. Second pass: Traverses `nums` from right to left, reusing the `nums` array
 *    to store the right products dynamically (in-place). This avoids allocating extra space.
 *    The temporary variable `temp` is used to carry the product so far from the right.
 *
 * 3. Third pass: Combines left and right products for the final result in `nums`.
 *
 * Time Complexity: O(n) — 3 linear passes over the array.
 * Space Complexity: O(1) — not counting the output array; we reuse `nums` for right products,
 * and only allocate `leftProducts` for left products.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number[]} - The resulting array where each index has the product except self.
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const leftProducts = [];
  var temp;

  // Build prefix product (product of all elements to the left of i)
  for (var i = 0; i < n; i++) {
    if (i == 0) leftProducts[i] = 1;
    else leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Overwrite nums to store right product (product of all elements to the right of i)
  for (var i = n - 1; i >= 0; i--) {
    if (i == n - 1) {
      temp = nums[i];
      nums[i] = 1;
    } else {
      [temp, nums[i]] = [nums[i], nums[i + 1] * temp];
    }
  }

  // Multiply left and right products to get the final result
  for (var i = 0; i < n; i++) {
    nums[i] = nums[i] * leftProducts[i];
  }

  return nums;
};
