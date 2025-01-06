"""
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

"""
# Approach: Hash Map and Heap

# Time Complexity:
# Counting frequencies takes 𝑂(𝑛), where 𝑛 is the length of nums.
# Maintaining the heap takes 𝑂(𝑛log𝑘), as each insertion/removal from the heap is 𝑂(log𝑘).
# Overall: 𝑂(𝑛log𝑘).

# Space Complexity:
# O(n) for the frequency map.
# O(k) for the heap.
# Overall: 𝑂(𝑛+𝑘).

from collections import Counter
from typing import List
import heapq


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Step 1: Count frequencies
        freq_map = Counter(nums)

        # Step 2: Use a heap to store the top k elements
        heap = []
        for num, freq in freq_map.items():
            heapq.heappush(heap, (freq, num))  # Push (frequency, num)
            if len(heap) > k:
                heapq.heappop(heap)  # Remove the least frequent element

        # Step 3: Extract the elements from the heap
        return [num for freq, num in heap]
