/*
128. Longest Consecutive Sequence
Medium

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

Topics
Array
Hash Table
Union Find
*/

package main

func longestConsecutive(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	set := make(map[int]bool)
	for _, num := range nums {
		set[num] = true
	}

	longest := 0

	for num := range set {
		// Only start counting if num is the beginning of a sequence
		if !set[num-1] {
			currentNum := num
			currentStreak := 1

			for set[currentNum+1] {
				currentNum++
				currentStreak++
			}

			if currentStreak > longest {
				longest = currentStreak
			}
		}
	}

	return longest
}
