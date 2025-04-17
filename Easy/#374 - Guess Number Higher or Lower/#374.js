/* Simple binary search algorithm */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  var left = 1;
  var right = n;

  while (left <= right) {
    var myGuess = Math.floor((left + right) / 2);
    var result = guess(myGuess);
    if (result === 0) return myGuess;
    else if (result === 1) left = myGuess + 1;
    else right = myGuess - 1;
  }
};
