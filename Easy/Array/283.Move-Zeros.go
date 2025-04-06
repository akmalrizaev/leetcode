/*

283. Move Zeroes

   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]



Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1


Follow up: Could you minimize the total number of operations done?

Topics
Array
Two Pointers
*/

package main

func moveZeroes(nums []int) {
	insertPos := 0

	// First pass: move non-zero values forward
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[insertPos] = nums[i]
			insertPos++
		}
	}

	// Second pass: fill the rest with zeroes
	for i := insertPos; i < len(nums); i++ {
		nums[i] = 0
	}
}
