/*

  169. Majority Element


  Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2



Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

Topics
Array
Hash Table
Divide and Conquer
Sorting
Counting

*/

package main

func majorityElement(nums []int) int {
	candidate := 0
	count := 0

	for _, num := range nums {
		if count == 0 {
			candidate = num
		}

		if num == candidate {
			count++
		} else {
			count--
		}
	}

	return candidate
}
