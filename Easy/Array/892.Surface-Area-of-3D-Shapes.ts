/*
892. Surface Area of 3D Shapes

You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).

After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.

Return the total surface area of the resulting shapes.

Note: The bottom face of each shape counts toward its surface area.

 

Example 1:


Input: grid = [[1,2],[3,4]]
Output: 34
Example 2:


Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
Example 3:


Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
Output: 46
 

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

function surfaceArea(grid: number[][]): number {
  const n = grid.length;
  let totalSurfaceArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        // Top and bottom surface
        totalSurfaceArea += 2;

        // Current cube sides
        totalSurfaceArea += 4 * grid[i][j];

        // Adjacent sides to the left
        if (i > 0) {
          totalSurfaceArea -= 2 * Math.min(grid[i][j], grid[i - 1][j]);
        }

        // Adjacent sides to the top
        if (j > 0) {
          totalSurfaceArea -= 2 * Math.min(grid[i][j], grid[i][j - 1]);
        }
      }
    }
  }

  return totalSurfaceArea;
}

// Example usage:
console.log(surfaceArea([[2]])); // Output: 10
console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ])
); // Output: 34
console.log(
  surfaceArea([
    [1, 0],
    [0, 2],
  ])
); // Output: 16
