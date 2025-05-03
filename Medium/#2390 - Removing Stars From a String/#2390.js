/**
 * @param {string} s
 * @return {string}
 */

/* Just normal stack problem*/
var removeStars = function (s) {
  const stack = [];
  for (var character of s) {
    if (character === "*") stack.pop();
    else stack.push(character);
  }
  return stack.join("");
};
