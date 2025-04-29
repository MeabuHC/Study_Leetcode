/**
 * @param {number} columnNumber
 * @return {string}
 */

/**
 * Converts a given positive integer to its corresponding Excel column title.
 * This works similar to a base-26 number system, but with letters A-Z instead of digits.
 *
 * Steps:
 * 1. Decrement the column number by 1 to adjust for 1-based indexing (Excel columns start at 1, not 0).
 * 2. Find the remainder when divided by 26 to get the current character (0 = 'A', ..., 25 = 'Z').
 * 3. Prepend the corresponding letter (using String.fromCharCode) to the result.
 * 4. Divide the number by 26 and repeat until the number becomes 0.
 * 5. Return the final result string, which is the Excel column title.
 */

var convertToTitle = function (columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--;
    let remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
