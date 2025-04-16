/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

/* Check if candies[i] + extraCandies ≥ maximum in Candies[i]. */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);

  var result = candies.map((candy) => {
    if (candy + extraCandies >= maxCandies) return true;
    return false;
  });

  return result;
};
