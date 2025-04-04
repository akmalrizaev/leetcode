"""
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
"""

from typing import List


class Solution:
    def projectionArea(self, grid: List[List[int]]) -> int:
        n = len(grid)

        # Top view: Count non-zero cells
        top_view = sum(1 for row in grid for cell in row if cell > 0)

        # Front view: Maximum of each row
        front_view = sum(max(row) for row in grid)

        # Side view: Maximum of each column
        side_view = sum(max(grid[i][j] for i in range(n)) for j in range(n))

        # Total projection area
        return top_view + front_view + side_view


# Example usage
solution = Solution()
print(solution.projectionArea([[1, 2], [3, 4]]))  # Output: 17
print(solution.projectionArea([[2]]))             # Output: 5
print(solution.projectionArea([[1, 0], [0, 2]]))  # Output: 8
