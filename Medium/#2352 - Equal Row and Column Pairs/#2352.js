/**
 * @param {number[][]} grid
 * @return {number}
 */

/* Just brute force : compare all rows with all columns :33*/
var equalPairs = function (grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    let rowArray = grid[row];

    // Compare the current row with each column
    for (let col = 0; col < grid.length; col++) {
      let isEqual = true;

      // Check if rowArray matches the current column
      for (let i = 0; i < grid.length; i++) {
        if (rowArray[i] !== grid[i][col]) {
          isEqual = false;
          break;
        }
      }

      if (isEqual) {
        count++;
      }
    }
  }

  return count;
};
