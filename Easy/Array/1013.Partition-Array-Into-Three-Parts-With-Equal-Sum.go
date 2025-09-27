/*

1013. Partition Array Into Three Parts With Equal Sum

Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])



Example 1:

Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4


Constraints:

3 <= arr.length <= 5 * 104
-104 <= arr[i] <= 104

Topics
Array
Greedy

⏱ Time Complexity: O(n)
📦 Space Complexity: O(1)

*/

package main

import "fmt"

func canThreePartsEqualSum(arr []int) bool {
	// Step 1: Compute total sum
	total := 0
	for _, num := range arr {
		total += num
	}

	// If total sum is not divisible by 3, return false
	if total%3 != 0 {
		return false
	}
	target := total / 3

	// Step 2: Find partitions
	currSum := 0
	count := 0
	for i := 0; i < len(arr); i++ {
		currSum += arr[i]
		if currSum == target {
			count++
			currSum = 0
		}
	}

	// Step 3: At least 3 partitions needed
	return count >= 3
}

func main() {
	fmt.Println(canThreePartsEqualSum([]int{0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1})) // true
	fmt.Println(canThreePartsEqualSum([]int{0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1})) // false
	fmt.Println(canThreePartsEqualSum([]int{3, 3, 6, 5, -2, 2, 5, 1, -9, 4}))    // true
}
