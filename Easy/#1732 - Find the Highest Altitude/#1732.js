/**
 * This function calculates the highest altitude a biker reaches during the trip.
 *
 * - The biker starts at altitude 0.
 * - The `gains` array contains the net gain/loss in altitude between consecutive points.
 * - We simulate the trip by summing up the gains step by step.
 * - At each step, we update the current altitude (`sum`) and check if it's the highest so far.
 * - We return the maximum altitude reached during the trip.
 *
 * @param {number[]} gains - Array of altitude changes between each point.
 * @return {number} - The highest altitude reached.
 */
var largestAltitude = function (gains) {
  var max = 0;
  var sum = 0;
  for (var gain of gains) {
    sum += gain;
    max = Math.max(max, sum);
  }

  return max;
};
