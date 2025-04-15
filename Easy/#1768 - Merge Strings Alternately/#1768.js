/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

/**
 * Merges two strings alternately by taking one character from each string at a time.
 * If one string is longer, appends the remaining characters at the end.
 */
var mergeAlternately = function (word1, word2) {
  var result = "";
  const minLength = Math.min(word1.length, word2.length);
  for (var i = 0; i < minLength; i++) {
    result += word1[i] + word2[i];
  }

  result += word1.slice(minLength) + word2.slice(minLength);
  return result;
};
