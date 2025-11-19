/*

34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

Topics
Array
Binary Search

⏱️ Complexity
Type	Complexity
Time	O(log n)
Space	O(1)

*/

package main

import "fmt"

func searchRange(nums []int, target int) []int {
	return []int{findFirst(nums, target), findLast(nums, target)}
}

func findFirst(nums []int, target int) int {
	left, right := 0, len(nums)-1
	index := -1

	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] >= target {
			right = mid - 1
		} else {
			left = mid + 1
		}

		if nums[mid] == target {
			index = mid
		}
	}

	return index
}

func findLast(nums []int, target int) int {
	left, right := 0, len(nums)-1
	index := -1

	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] <= target {
			left = mid + 1
		} else {
			right = mid - 1
		}

		if nums[mid] == target {
			index = mid
		}
	}

	return index
}

func main() {
	fmt.Println(searchRange([]int{5, 7, 7, 8, 8, 10}, 8)) // [3 4]
	fmt.Println(searchRange([]int{5, 7, 7, 8, 8, 10}, 6)) // [-1 -1]
	fmt.Println(searchRange([]int{}, 0))                  // [-1 -1]
}
