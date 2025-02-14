"""
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
"""

from typing import List
from itertools import combinations


class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        def triangle_area(p1, p2, p3):
            x1, y1 = p1
            x2, y2 = p2
            x3, y3 = p3
            return abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2

        max_area = 0
        for p1, p2, p3 in combinations(points, 3):
            max_area = max(max_area, triangle_area(p1, p2, p3))

        return max_area


# Example usage
solution = Solution()
print(solution.largestTriangleArea(
    [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]))  # Output: 2.0
print(solution.largestTriangleArea(
    [[1, 0], [0, 0], [0, 1]]))                  # Output: 0.5
