/*

645. Set Mismatch


You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.



Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]


Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104

Topics
Array
Hash Table
Bit Manipulation
Sorting

*/

package main

func findErrorNums(nums []int) []int {
	duplicate, missing := -1, -1
	for _, num := range nums {
		if nums[abs(num)-1] < 0 {
			duplicate = abs(num)
		} else {
			nums[abs(num)-1] *= -1
		}
	}

	for i, num := range nums {
		if num > 0 {
			missing = i + 1
		}
	}

	return []int{duplicate, missing}
}

// Helper function to get the absolute value
func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}
