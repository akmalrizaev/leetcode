/*

  349. Intersection of Two Arrays


  Given two integer arrays nums1 and nums2, return an array of their
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000

Topics
Array
Hash Table
Two Pointers
Binary Search
Sorting

*/

function intersection(nums1: number[], nums2: number[]): number[] {
  // Create a set from nums1
  const set1 = new Set<number>(nums1);
  // Create a set to store the result
  const resultSet = new Set<number>();

  // Iterate through nums2
  for (const num of nums2) {
    // Check if num is in set1 (nums1 set)
    if (set1.has(num)) {
      // Add num to the resultSet if it's in both arrays
      resultSet.add(num);
    }
  }

  // Convert resultSet to an array and return
  return Array.from(resultSet);
}

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // Output: [2]

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4)); // Output: [9, 4]
