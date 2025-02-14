/*

1037. Valid Boomerang

Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight line.

 

Example 1:

Input: points = [[1,1],[2,3],[3,2]]
Output: true
Example 2:

Input: points = [[1,1],[2,2],[3,3]]
Output: false
 

Constraints:

points.length == 3
points[i].length == 2
0 <= xi, yi <= 100

Topics
Array
Math
Geometry

*/

function isBoomerang(points: number[][]): boolean {
  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];

  // Using the determinant formula to check for collinearity
  return (x2 - x1) * (y3 - y1) !== (x3 - x1) * (y2 - y1);
}

// Example usage:
console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
); // Output: true
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
); // Output: false
