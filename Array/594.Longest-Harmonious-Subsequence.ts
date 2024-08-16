/*

594. Longest Harmonious Subsequence

We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Example 2:

Input: nums = [1,2,3,4]
Output: 2
Example 3:

Input: nums = [1,1,1,1]
Output: 0
 

Constraints:

1 <= nums.length <= 2 * 104
-109 <= nums[i] <= 109

Topics
Array
Hash Table
Sliding Window
Sorting
Counting

*/

function findLHS(nums: number[]): number {
  const freqMap = new Map<number, number>();

  // Step 1: Count the frequency of each element
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let maxLength = 0;

  // Step 2: Find the maximum length of a harmonious subsequence
  for (const [key, value] of freqMap) {
    if (freqMap.has(key + 1)) {
      maxLength = Math.max(maxLength, value + (freqMap.get(key + 1) || 0));
    }
  }

  return maxLength;
}

// Example usage:
const nums1 = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums1)); // Output: 5

const nums2 = [1, 2, 3, 4];
console.log(findLHS(nums2)); // Output: 2

const nums3 = [1, 1, 1, 1];
console.log(findLHS(nums3)); // Output: 0
