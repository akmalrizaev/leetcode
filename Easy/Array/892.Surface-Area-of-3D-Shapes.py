"""
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
"""

from typing import List


class Solution:
    def surfaceArea(self, grid: List[List[int]]) -> int:
        n = len(grid)
        total_area = 0

        for i in range(n):
            for j in range(n):
                if grid[i][j] > 0:
                    # Add top and bottom surfaces
                    total_area += 2

                    # Add side surfaces for each direction
                    for di, dj in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                        ni, nj = i + di, j + dj
                        neighbor_height = grid[ni][nj] if 0 <= ni < n and 0 <= nj < n else 0
                        total_area += max(grid[i][j] - neighbor_height, 0)

        return total_area


# Example usage
solution = Solution()
print(solution.surfaceArea([[2]]))                 # Output: 10
print(solution.surfaceArea([[1, 2], [3, 4]]))     # Output: 34
print(solution.surfaceArea([[1, 0], [0, 2]]))     # Output: 16
print(solution.surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))  # Output: 32
