/*

628. Maximum Product of Three Numbers

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.



Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6


Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Topics
Array
Math
Sorting

*/

package main

import "sort"

func maximumProduct(nums []int) int {
	// Sort the array
	sort.Ints(nums)

	// Calculate the two possible maximum products
	n := len(nums)
	product1 := nums[n-1] * nums[n-2] * nums[n-3] // Three largest numbers
	product2 := nums[0] * nums[1] * nums[n-1]     // Two smallest and largest number

	// Return the maximum of the two
	return max(product1, product2)
}

// Helper function to find the maximum of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
