/*

347. Top K Frequent Elements

Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

Topics
Array
Hash Table
Divide and Conquer
Sorting
Heap (Priority Queue)
Bucket Sort
Counting
Quickselect

⏱️ Complexity
Type	Complexity
Time	O(n)
Space	O(n)

*/

package main

func topKFrequent(nums []int, k int) []int {
	// Step 1: Frequency map
	freq := make(map[int]int)
	for _, num := range nums {
		freq[num]++
	}

	// Step 2: Bucket sort (index = frequency)
	buckets := make([][]int, len(nums)+1)
	for num, f := range freq {
		buckets[f] = append(buckets[f], num)
	}

	// Step 3: Collect top k frequent elements
	result := []int{}
	for i := len(buckets) - 1; i >= 0 && len(result) < k; i-- {
		for _, num := range buckets[i] {
			result = append(result, num)
			if len(result) == k {
				break
			}
		}
	}

	return result
}
