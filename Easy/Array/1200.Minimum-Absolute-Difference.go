/*

1200. Minimum Absolute Difference

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr


Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]


Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106

Topics
Array
Sorting

⏱️ Complexity:

Time: O(n log n) — due to sorting.

Space: O(1) — only constant extra space used.

*/

package main

import (
	"fmt"
	"sort"
)

func minimumAbsDifference(arr []int) [][]int {
	sort.Ints(arr)
	minDiff := arr[1] - arr[0]

	// Находим минимальную разницу
	for i := 1; i < len(arr)-1; i++ {
		diff := arr[i+1] - arr[i]
		if diff < minDiff {
			minDiff = diff
		}
	}

	// Собираем все пары с минимальной разницей
	result := [][]int{}
	for i := 0; i < len(arr)-1; i++ {
		if arr[i+1]-arr[i] == minDiff {
			result = append(result, []int{arr[i], arr[i+1]})
		}
	}

	return result
}

func main() {
	arr := []int{4, 2, 1, 3}
	fmt.Println(minimumAbsDifference(arr)) // [[1 2] [2 3] [3 4]]
}
