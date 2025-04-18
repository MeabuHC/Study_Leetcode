/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * Why do we move the pointer at the shorter line?
 *
 * The area between two lines is calculated as:
 *     Area = min(height[left], height[right]) * (right - left)
 *
 * - The width `(right - left)` is fixed at each step.
 * - So the only way to try to get a **larger area** is by finding a taller line (since we can't increase the width — it gets smaller as we move).
 *
 * Key idea:
 * - If we move the pointer pointing to the **taller line**, the height can't increase (because the limiting factor is still the shorter line),
 *   and the width gets smaller — so the area can only **stay the same or decrease**.
 *
 * - But if we move the pointer at the **shorter line**, we have a chance of finding a taller line later,
 *   which could increase the area (even though the width is smaller, a taller height might compensate).
 *
 * Therefore:
 * - Always move the pointer at the shorter line inward.
 * - This gives us the best chance to find a container with a larger height, and possibly a larger area.
 */

var maxArea = function (height) {
  var left_pointer = 0;
  var right_pointer = height.length - 1;
  var maxArea = 0;

  while (left_pointer < right_pointer) {
    if (height[left_pointer] > height[right_pointer]) {
      maxArea = Math.max(
        maxArea,
        height[right_pointer] * (right_pointer - left_pointer)
      );
      right_pointer--;
    } else {
      maxArea = Math.max(
        maxArea,
        height[left_pointer] * (right_pointer - left_pointer)
      );
      left_pointer++;
    }
  }

  return maxArea;
};
