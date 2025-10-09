/*

1089. Duplicate Zeros

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.



Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 9

Topics
Array
Two Pointers

⏱ Complexity

Time: O(n) — single backward pass

Space: O(1) — in-place modification

*/

package main

import "fmt"

func duplicateZeros(arr []int) {
	n := len(arr)
	zeros := 0

	// Step 1: Count zeros (but be careful with boundary)
	for i := 0; i < n-zeros; i++ {
		if arr[i] == 0 {
			// If this zero is at the boundary, handle edge case
			if i == n-zeros-1 {
				arr[n-1] = 0
				n--
				break
			}
			zeros++
		}
	}

	// Step 2: Start from the end, copy elements backward
	last := n - zeros - 1
	for i := last; i >= 0; i-- {
		if arr[i] == 0 {
			arr[i+zeros] = 0
			zeros--
			arr[i+zeros] = 0
		} else {
			arr[i+zeros] = arr[i]
		}
	}
}

func main() {
	arr1 := []int{1, 0, 2, 3, 0, 4, 5, 0}
	duplicateZeros(arr1)
	fmt.Println(arr1) // [1 0 0 2 3 0 0 4]

	arr2 := []int{1, 2, 3}
	duplicateZeros(arr2)
	fmt.Println(arr2) // [1 2 3]
}
