/*

697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.



Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation:
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.


Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

Topics
Array
Hash Table

*/

package main

func findShortestSubarray(nums []int) int {
	frequency := map[int]int{}
	firstIndex := map[int]int{}
	lastIndex := map[int]int{}

	// Populate frequency, firstIndex, and lastIndex maps
	for i, num := range nums {
		if _, found := firstIndex[num]; !found {
			firstIndex[num] = i
		}
		lastIndex[num] = i
		frequency[num]++
	}

	// Find the degree of the array
	degree := 0
	for _, freq := range frequency {
		if freq > degree {
			degree = freq
		}
	}

	// Find the minimum length of subarrays with the same degree
	minLength := len(nums)
	for num, freq := range frequency {
		if freq == degree {
			length := lastIndex[num] - firstIndex[num] + 1
			if length < minLength {
				minLength = length
			}
		}
	}

	return minLength
}
