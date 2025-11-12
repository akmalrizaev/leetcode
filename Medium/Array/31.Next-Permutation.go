/*

31. Next Permutation

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.



Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100

Topics
Array
Two Pointers

⏱️ Complexity
Type	Complexity
Time	O(n)
Space	O(1)

*/

package main

import "fmt"

func nextPermutation(nums []int) {
	n := len(nums)
	if n <= 1 {
		return
	}

	// Step 1: Find first decreasing index from right
	i := n - 2
	for i >= 0 && nums[i] >= nums[i+1] {
		i--
	}

	// Step 2: If found, find next larger number to swap
	if i >= 0 {
		j := n - 1
		for nums[j] <= nums[i] {
			j--
		}
		nums[i], nums[j] = nums[j], nums[i]
	}

	// Step 3: Reverse the suffix (nums[i+1:])
	reverse(nums, i+1, n-1)
}

func reverse(nums []int, left, right int) {
	for left < right {
		nums[left], nums[right] = nums[right], nums[left]
		left++
		right--
	}
}

func main() {
	nums1 := []int{1, 2, 3}
	nextPermutation(nums1)
	fmt.Println(nums1) // [1 3 2]

	nums2 := []int{3, 2, 1}
	nextPermutation(nums2)
	fmt.Println(nums2) // [1 2 3]

	nums3 := []int{1, 1, 5}
	nextPermutation(nums3)
	fmt.Println(nums3) // [1 5 1]
}
