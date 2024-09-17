/*

883. Projection Area of 3D Shapes


You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

We view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

 

Example 1:


Input: grid = [[1,2],[3,4]]
Output: 17
Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
- Top view: There are 4 cubes, so the area is 4.
- Front view: The highest in each column is 3 and 4, so the area is 3 + 4 = 7.
- Side view: The highest in each row is 2 and 4, so the area is 2 + 4 = 6.
- Total area = 4 + 7 + 6 = 17.

Example 2:

Input: grid = [[2]]
Output: 5
Explanation:
- Top view: There is 1 cube, so the area is 1.
- Front view: The highest is 2, so the area is 2.
- Side view: The highest is 2, so the area is 2.
- Total area = 1 + 2 + 2 = 5.


Example 3:

Input: grid = [[1,0],[0,2]]
Output: 8
Explanation:
- Top view: There are 2 cubes, so the area is 2.
- Front view: The highest in each column is 1 and 2, so the area is 1 + 2 = 3.
- Side view: The highest in each row is 1 and 2, so the area is 1 + 2 = 3.
- Total area = 2 + 3 + 3 = 8.
 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 50
0 <= grid[i][j] <= 50

Topics
Array
Math
Geometry
Matrix

*/

function projectionArea(grid: number[][]): number {
  const n = grid.length;
  let topView = 0;
  let frontView = 0;
  let sideView = 0;

  for (let i = 0; i < n; i++) {
    let maxRow = 0;
    let maxCol = 0;
    for (let j = 0; j < n; j++) {
      // Top view: count non-zero cells
      if (grid[i][j] > 0) {
        topView++;
      }
      // Side view: max in each row
      maxRow = Math.max(maxRow, grid[i][j]);
      // Front view: max in each column
      maxCol = Math.max(maxCol, grid[j][i]);
    }
    sideView += maxRow;
    frontView += maxCol;
  }

  return topView + frontView + sideView;
}

// Example usage:
console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ])
); // Output: 17
console.log(projectionArea([[2]])); // Output: 5
console.log(
  projectionArea([
    [1, 0],
    [0, 2],
  ])
); // Output: 8
