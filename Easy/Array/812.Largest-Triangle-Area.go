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

package main

import "math"

func largestTriangleArea(points [][]int) float64 {
	maxArea := 0.0

	for i := 0; i < len(points); i++ {
		for j := i + 1; j < len(points); j++ {
			for k := j + 1; k < len(points); k++ {
				area := triangleArea(points[i], points[j], points[k])
				if area > maxArea {
					maxArea = area
				}
			}
		}
	}

	return maxArea
}

func triangleArea(p1, p2, p3 []int) float64 {
	x1, y1 := float64(p1[0]), float64(p1[1])
	x2, y2 := float64(p2[0]), float64(p2[1])
	x3, y3 := float64(p3[0]), float64(p3[1])

	return 0.5 * math.Abs(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))
}
