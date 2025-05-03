/**
 * The decodeString function decodes an encoded string following the pattern of
 * numbers followed by strings enclosed in square brackets, e.g., "3[a2[c]]"
 * would decode to "accaccacc".
 *
 * Steps to decode:
 * 1. **Stack Initialization:** We use a stack to help manage nested encodings.
 *    - The stack will hold characters, digits, and parts of the encoded string that
 *      are still to be decoded.
 *
 * 2. **Processing Each Character:**
 *    - We loop through each character of the string.
 *
 * 3. **Handling Closing Bracket `]`:**
 *    - When we encounter a closing bracket `]`, it means we've reached the end of
 *      an encoded part.
 *    - We start by popping characters from the stack until we encounter an opening
 *      bracket `[`. These characters form the string that needs to be repeated.
 *    - Once we have the string, we then need to determine how many times to repeat
 *      it. To do this, we keep popping digits from the stack until we get the number.
 *    - After determining the number, we repeat the string that was collected from
 *      the stack.
 *    - The repeated string is then pushed back onto the stack.
 *
 * 4. **Handling Opening Bracket `[` and Digits:**
 *    - When we encounter an opening bracket `[`, it marks the beginning of an encoded
 *      pattern that we need to repeat.
 *    - If we encounter digits (e.g., `3` in "3[a2[c]]"), we push these digits onto
 *      the stack as they are part of the encoding.
 *    - Characters that are part of the string to repeat are also pushed onto the stack
 *      until the corresponding `]` is found.
 *
 * 5. **Final Output:**
 *    - At the end of the loop, the stack contains the fully decoded string, which we
 *      join and return as the final result.
 *
 * Time Complexity: O(n) - where n is the length of the string.
 * Space Complexity: O(n) - for storing characters and intermediate results in the stack.
 *
 * @param {string} s - The encoded string.
 * @return {string} - The decoded string.
 */
var decodeString = function (s) {
  var stack = [];

  for (let char of s) {
    if (char === "]") {
      let temp = "";
      while (true) {
        if (stack[stack.length - 1] != "[") {
          temp = stack.pop() + temp;
        } else {
          stack.pop();
          let number = "";
          while (stack.length != 0 && !isNaN(stack[stack.length - 1])) {
            number = stack.pop() + number;
          }
          temp = temp.repeat(parseInt(number));
          for (let ch of temp) {
            stack.push(ch);
          }
          break;
        }
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
