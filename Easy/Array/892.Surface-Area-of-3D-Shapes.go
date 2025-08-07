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

Complexity
Time: O(n²) — one constant-time pass over the grid.
Space: O(1) — just a few scalars.

Topics
Array
Math
Geometry
Matrix

*/

package main

func surfaceArea(grid [][]int) int {
	n := len(grid)
	area := 0

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			h := grid[i][j]
			if h == 0 {
				continue
			}

			// Each cube contributes 6 faces
			area += 6 * h

			// Faces hidden inside the same stack
			area -= 2 * (h - 1)

			// Faces shared with the top neighbor
			if i > 0 {
				shared := min(h, grid[i-1][j])
				area -= 2 * shared
			}

			// Faces shared with the left neighbor
			if j > 0 {
				shared := min(h, grid[i][j-1])
				area -= 2 * shared
			}
		}
	}
	return area
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
