/*

566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2], [3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:
Input: mat = [[1,2], [3,4]], r = 2, c = 4
Output: [[1,2], [3,4]]
Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300

Topics
Array
Matrix
Simulation

*/

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length; // number of rows in the original matrix
  const n = mat[0].length; // number of columns in the original matrix

  // Check if reshaping is possible
  if (m * n !== r * c) {
    return mat;
  }

  // Flatten the original matrix
  const flat: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flat.push(mat[i][j]);
    }
  }

  // Create the reshaped matrix
  const result: number[][] = [];
  for (let i = 0; i < r; i++) {
    const row: number[] = [];
    for (let j = 0; j < c; j++) {
      row.push(flat[i * c + j]);
    }
    result.push(row);
  }

  return result;
}

// Example usage:
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
); // Output: [[1, 2, 3, 4]]
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
); // Output: [[1, 2], [3, 4]]
