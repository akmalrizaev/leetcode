/*

605. Can Place Flowers
Easy


You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false


Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

Topics
Array
Greedy

Time & Space Complexity:

Time Complexity: O(n) — Single pass through the array

Space Complexity: O(1) — In-place, no extra space

*/

package main

func canPlaceFlowers(flowerbed []int, n int) bool {
	for i := 0; i < len(flowerbed); i++ {
		// Check if current plot is empty
		if flowerbed[i] == 0 {
			// Check left and right plots
			emptyLeft := (i == 0) || (flowerbed[i-1] == 0)
			emptyRight := (i == len(flowerbed)-1) || (flowerbed[i+1] == 0)

			if emptyLeft && emptyRight {
				flowerbed[i] = 1 // Plant a flower
				n--              // One less flower to plant

				if n == 0 {
					return true
				}
			}
		}
	}
	return n <= 0
}
