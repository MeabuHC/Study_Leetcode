/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/**
 * Determines if it's possible to plant `n` new flowers in a flowerbed without violating the rule
 * that no two flowers can be adjacent.
 *
 * Approach:
 * - Iterate through each plot in the flowerbed.
 * - If the current plot is empty (0), check if both adjacent plots (left and right) are also empty or out of bounds.
 *   - If true, plant a flower in the current plot by setting it to 1, and increment the count.
 * - After scanning the entire flowerbed, check if the number of flowers planted is greater than or equal to `n`.
 * - Return true if it is possible to plant `n` flowers, otherwise return false.
 *
 * Edge Cases Handled:
 * - The first and last plots are treated carefully to avoid accessing out-of-bounds indices.
 *
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
};
