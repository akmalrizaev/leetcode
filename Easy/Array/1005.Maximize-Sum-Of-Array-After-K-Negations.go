/*

1005. Maximize Sum Of Array After K Negations

Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.



Example 1:

Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].
Example 2:

Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
Example 3:

Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].


Constraints:

1 <= nums.length <= 104
-100 <= nums[i] <= 100
1 <= k <= 104

Topics
Array
Greedy
Sorting

⏱ Time Complexity: O(n log n) (due to sorting)
📦 Space Complexity: O(1)

*/

package main

import (
	"fmt"
	"sort"
)

func largestSumAfterKNegations(nums []int, k int) int {
	// Step 1: Sort the array
	sort.Ints(nums)

	// Step 2: Flip as many negative numbers as possible
	for i := 0; i < len(nums) && k > 0; i++ {
		if nums[i] < 0 {
			nums[i] = -nums[i]
			k--
		}
	}

	// Step 3: If k > 0, handle remaining flips
	// Sort again to make smallest number at front
	sort.Ints(nums)

	if k%2 == 1 {
		// Flip the smallest element once more
		nums[0] = -nums[0]
	}

	// Step 4: Compute final sum
	sum := 0
	for _, num := range nums {
		sum += num
	}
	return sum
}

func main() {
	fmt.Println(largestSumAfterKNegations([]int{4, 2, 3}, 1))          // 5
	fmt.Println(largestSumAfterKNegations([]int{3, -1, 0, 2}, 3))      // 6
	fmt.Println(largestSumAfterKNegations([]int{2, -3, -1, 5, -4}, 2)) // 13
}
