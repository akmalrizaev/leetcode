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

⏱ Complexity

Time: O(1)

Space: O(1)

*/

package main

import "fmt"

func isBoomerang(points [][]int) bool {
	// Step 1: Check if points are distinct
	if (points[0][0] == points[1][0] && points[0][1] == points[1][1]) ||
		(points[0][0] == points[2][0] && points[0][1] == points[2][1]) ||
		(points[1][0] == points[2][0] && points[1][1] == points[2][1]) {
		return false
	}

	// Step 2: Check if they are collinear
	// Using area of triangle formula:
	// (x1(y2-y3) + x2(y3-y1) + x3(y1-y2)) == 0 → collinear
	x1, y1 := points[0][0], points[0][1]
	x2, y2 := points[1][0], points[1][1]
	x3, y3 := points[2][0], points[2][1]

	area := x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)
	return area != 0
}

func main() {
	fmt.Println(isBoomerang([][]int{{1, 1}, {2, 3}, {3, 2}})) // true
	fmt.Println(isBoomerang([][]int{{1, 1}, {2, 2}, {3, 3}})) // false (collinear)
	fmt.Println(isBoomerang([][]int{{0, 0}, {0, 2}, {2, 1}})) // true
}
