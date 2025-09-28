/*

Problem 1018: Binary Prefix Divisible By 5

You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.



Example 1:

Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.
Example 2:

Input: nums = [1,1,1]
Output: [false,false,false]


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

Topics
Array
Bit Manipulation

⏱ Complexity

Time: O(n) (one pass)

Space: O(n) (result array)

*/

package main

import "fmt"

func prefixesDivBy5(nums []int) []bool {
	result := make([]bool, len(nums))
	num := 0

	for i, bit := range nums {
		// Shift left (multiply by 2) and add current bit
		num = (num*2 + bit) % 5 // keep modulo 5 to avoid overflow
		result[i] = (num == 0)
	}

	return result
}

func main() {
	fmt.Println(prefixesDivBy5([]int{0, 1, 1}))       // [true false false]
	fmt.Println(prefixesDivBy5([]int{1, 0, 1}))       // [false false true]
	fmt.Println(prefixesDivBy5([]int{1, 1, 1, 0, 1})) // [false false false false false]
}
