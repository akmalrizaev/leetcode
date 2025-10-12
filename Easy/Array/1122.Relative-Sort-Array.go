/*

1122. Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.



Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]


Constraints:

1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.

Topics
Array
Hash Table
Sorting
Counting Sort

⏱ Complexity

Time: O(n log n) — for sorting

Space: O(m) — for the order map (m = len(arr2))

*/

package main

import (
	"fmt"
	"sort"
)

func relativeSortArray(arr1 []int, arr2 []int) []int {
	// Step 1: Map each element in arr2 to its index (order)
	order := make(map[int]int)
	for i, val := range arr2 {
		order[val] = i
	}

	// Step 2: Sort arr1 with a custom comparator
	sort.Slice(arr1, func(i, j int) bool {
		// If both in arr2 → compare their order
		iOrder, iExists := order[arr1[i]]
		jOrder, jExists := order[arr1[j]]

		if iExists && jExists {
			return iOrder < jOrder
		}
		// If only one exists in arr2 → that one comes first
		if iExists {
			return true
		}
		if jExists {
			return false
		}
		// Otherwise → normal ascending order
		return arr1[i] < arr1[j]
	})

	return arr1
}

func main() {
	arr1 := []int{2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19}
	arr2 := []int{2, 1, 4, 3, 9, 6}
	fmt.Println(relativeSortArray(arr1, arr2)) // [2 2 2 1 4 3 3 9 6 7 19]

	arr3 := []int{28, 6, 22, 8, 44, 17}
	arr4 := []int{22, 28, 8, 6}
	fmt.Println(relativeSortArray(arr3, arr4)) // [22 28 8 6 17 44]
}
