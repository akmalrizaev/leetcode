/*

1030. Matrix Cells in Distance Order

You are given four integers row, cols, rCenter, and cCenter. There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter).

Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter) from the smallest distance to the largest distance. You may return the answer in any order that satisfies this condition.

The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.



Example 1:

Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
Output: [[0,0],[0,1]]
Explanation: The distances from (0, 0) to other cells are: [0,1]
Example 2:

Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1
Output: [[0,1],[0,0],[1,1],[1,0]]
Explanation: The distances from (0, 1) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
Example 3:

Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2
Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
Explanation: The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].


Constraints:

1 <= rows, cols <= 100
0 <= rCenter < rows
0 <= cCenter < cols

Topics
Array
Math
Geometry
Sorting
Matrix

⏱ Complexity

Time: O(n log n), where n = rows*cols (due to sorting).

Space: O(n).

*/

package main

import (
	"fmt"
	"sort"
)

func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
	result := make([][]int, 0, rows*cols)

	// Step 1: collect all cells
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			result = append(result, []int{r, c})
		}
	}

	// Step 2: sort by Manhattan distance
	sort.Slice(result, func(i, j int) bool {
		d1 := abs(result[i][0]-rCenter) + abs(result[i][1]-cCenter)
		d2 := abs(result[j][0]-rCenter) + abs(result[j][1]-cCenter)
		return d1 < d2
	})

	return result
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func main() {
	fmt.Println(allCellsDistOrder(1, 2, 0, 0)) // [[0 0] [0 1]]
	fmt.Println(allCellsDistOrder(2, 2, 0, 1)) // [[0 1] [0 0] [1 1] [1 0]]
	fmt.Println(allCellsDistOrder(2, 3, 1, 2)) // [[1 2] [0 2] [1 1] [0 1] [1 0] [0 0]]
}
