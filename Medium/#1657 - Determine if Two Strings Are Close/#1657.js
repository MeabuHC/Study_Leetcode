/**
 * Determines if two words can be transformed into each other using two operations:
 * 1. Swapping any two characters.
 * 2. Transforming one character into another (and vice versa).
 *
 * Two words are considered "close" if:
 * - They have the same length.
 * - They use the same set of unique characters (order doesn't matter).
 * - The frequency of each character in both words is identical, regardless of the character.
 *
 * The solution works by:
 * - Checking if both words have the same set of unique characters.
 * - Sorting and comparing the frequency of characters in both words.
 * If both conditions are met, the words are "close".
 *
 * @param {string} word1 - The first word to compare.
 * @param {string} word2 - The second word to compare.
 * @return {boolean} - Returns true if the words can be transformed into each other, otherwise false.
 */

var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (const char of word1) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  for (const char of word2) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  const values1 = Array.from(map1.values()).sort((a, b) => a - b);
  const values2 = Array.from(map2.values()).sort((a, b) => a - b);

  const keys1 = Array.from(map1.keys()).sort();
  const keys2 = Array.from(map2.keys()).sort();

  if (values1.length !== values2.length || keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i] || keys1[i] !== keys2[i]) {
      return false;
    }
  }

  return true;
};
