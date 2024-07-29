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

function majorityElement(nums: number[]): number {
  const frequencyMap: { [key: number]: number } = {};

  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > Math.floor(nums.length / 2)) {
      return num;
    }
  }

  return -1; // Should not reach here if input is guaranteed to have a majority element.
}

// Example usage:
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2
