/*

941. Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104

⏱ Time Complexity: O(n·m) (n = number of emails, m = average length of email)
📦 Space Complexity: O(n)

Topics
Array

*/

package main

func validMountainArray(arr []int) bool {
	n := len(arr)
	if n < 3 {
		return false
	}

	i := 0
	// walk up
	for i+1 < n && arr[i] < arr[i+1] {
		i++
	}

	// peak can't be first or last
	if i == 0 || i == n-1 {
		return false
	}

	// walk down
	for i+1 < n && arr[i] > arr[i+1] {
		i++
	}

	return i == n-1
}
