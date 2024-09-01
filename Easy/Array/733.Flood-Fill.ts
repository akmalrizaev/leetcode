/*

733. Flood Fill

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

 

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation:



From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.

Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0

Output: [[0,0,0],[0,0,0]]

Explanation:

The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.

 

Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n

Topics
Array
Depth-First Search
Breadth-First Search
Matrix

*/

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const originalColor = image[sr][sc];

  // If the original color is the same as newColor, no need to proceed
  if (originalColor === newColor) {
    return image;
  }

  // Directions array for moving up, down, left, right
  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
  ];

  // Helper function for DFS
  function dfs(x: number, y: number) {
    // Color the current cell with the new color
    image[x][y] = newColor;

    // Explore all 4 directions
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // Check if the new coordinates are within bounds and have the original color
      if (
        newX >= 0 &&
        newX < image.length &&
        newY >= 0 &&
        newY < image[0].length &&
        image[newX][newY] === originalColor
      ) {
        dfs(newX, newY); // Recursively call dfs for the next cell
      }
    }
  }

  // Start DFS from the initial cell
  dfs(sr, sc);

  return image;
}

// Example usage
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // Output: [[2,2,2],[2,2,0],[2,0,1]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // Output: [[0,0,0],[0,0,0]]
