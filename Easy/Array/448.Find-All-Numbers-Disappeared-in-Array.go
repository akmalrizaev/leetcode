/*

    448. Find All Numbers Disappeared in an Array

    Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.



Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]



Constraints:

    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n



Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Topics
Array
Hash Table

*/

package main

func findDisappearedNumbers(nums []int) []int {
	// Mark numbers in place
	for _, num := range nums {
		index := abs(num) - 1
		if nums[index] > 0 {
			nums[index] = -nums[index]
		}
	}

	// Collect indices of positive numbers
	result := []int{}
	for i, num := range nums {
		if num > 0 {
			result = append(result, i+1)
		}
	}

	return result
}

// Helper function to get absolute value
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
