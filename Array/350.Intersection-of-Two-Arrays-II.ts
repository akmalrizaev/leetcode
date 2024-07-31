/*

  350. Intersection of Two Arrays II

  Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

Topics
Array
Hash Table
Two Pointers
Binary Search
Sorting

*/

function intersect(nums1: number[], nums2: number[]): number[] {
  // Create a hash map to count occurrences in nums1
  const countMap: { [key: number]: number } = {};

  // Count occurrences of each number in nums1
  for (const num of nums1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  const result: number[] = [];

  // Find intersection with nums2
  for (const num of nums2) {
    if (countMap[num] && countMap[num] > 0) {
      result.push(num);
      countMap[num]--; // Decrease count in the map
    }
  }

  return result;
}

// Example usage:
const nums350_1 = [1, 2, 2, 1];
const nums350_2 = [2, 2];
console.log(intersect(nums350_1, nums350_2)); // Output: [2, 2]

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersect(nums3, nums4)); // Output: [9, 4] or [4, 9]
