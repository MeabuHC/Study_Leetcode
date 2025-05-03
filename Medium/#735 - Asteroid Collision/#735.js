/**
 * The function simulates asteroid collisions and returns the resulting array of asteroids
 * after all collisions have been resolved.
 *
 * The algorithm uses a stack to keep track of the asteroids that are still in motion:
 * - When an asteroid moves to the right (positive value), it is simply added to the stack.
 * - When an asteroid moves to the left (negative value), it potentially collides with the
 *   top of the stack (the most recent asteroid moving to the right).
 *
 * Collision rules:
 * 1. If the stack is empty or the asteroid is moving to the right, the asteroid is added to the stack.
 * 2. If the asteroid is moving to the left and the top of the stack is moving to the right:
 *    - If the absolute value of the left-moving asteroid is greater than the right-moving asteroid,
 *      the right-moving asteroid is destroyed (i.e., popped from the stack) and the comparison continues.
 *    - If both asteroids have the same size (absolute value), both are destroyed (i.e., popped from the stack).
 *    - If the right-moving asteroid is larger, the left-moving asteroid is destroyed (i.e., it is not added to the stack).
 *
 * The function continues this process for all asteroids in the input array and returns the final stack.
 *
 * @param {number[]} asteroids - Array of integers representing asteroids, where positive values
 *                                represent asteroids moving to the right, and negative values
 *                                represent asteroids moving to the left.
 * @return {number[]} - The resulting array of asteroids after all collisions are resolved.
 */

var asteroidCollision = function (asteroids) {
  var stack = [];
  for (var asteroid of asteroids) {
    while (true) {
      if (
        stack.length === 0 ||
        !(stack[stack.length - 1] > 0 && asteroid < 0)
      ) {
        stack.push(asteroid);
        break;
      } else if (Math.abs(asteroid) > stack[stack.length - 1]) {
        stack.pop();
      } else if (Math.abs(asteroid) === stack[stack.length - 1]) {
        stack.pop();
        break;
      } else {
        break;
      }
    }
  }
  return stack;
};
