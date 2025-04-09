/*

643. Maximum Average Subarray I
Easy


You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.



Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000


Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

Topics
Array
Sliding Window

*/

package main

func findMaxAverage(nums []int, k int) float64 {
	// Calculate the initial sum of the first k elements
	currentSum := 0
	for i := 0; i < k; i++ {
		currentSum += nums[i]
	}

	// Initialize maxSum as the current sum
	maxSum := currentSum

	// Slide the window across the array
	for i := k; i < len(nums); i++ {
		currentSum += nums[i] - nums[i-k] // Add new element, remove old element
		if currentSum > maxSum {
			maxSum = currentSum
		}
	}

	// Return the maximum average
	return float64(maxSum) / float64(k)
}
