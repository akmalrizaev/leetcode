/*

812. Largest Triangle Area

Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:


Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2.00000
Explanation: The five points are shown in the above figure. The red triangle is the largest.
Example 2:

Input: points = [[1,0],[0,0],[0,1]]
Output: 0.50000
 

Constraints:

3 <= points.length <= 50
-50 <= xi, yi <= 50
All the given points are unique.

Topics
Array
Math
Geometry

*/

function largestTriangleArea(points: number[][]): number {
  let maxArea = 0;

  const calculateArea = (p1: number[], p2: number[], p3: number[]): number => {
    return (
      0.5 *
      Math.abs(
        p1[0] * (p2[1] - p3[1]) +
          p2[0] * (p3[1] - p1[1]) +
          p3[0] * (p1[1] - p2[1])
      )
    );
  };

  const n = points.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const area = calculateArea(points[i], points[j], points[k]);
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }

  return maxArea;
}

// Example usage:
console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
); // Output: 2
console.log(
  largestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ])
); // Output: 0.5
