/*

  219. Contains Duplicate II


  Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105

Topics
Array
Hash Table
Sliding Window

*/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numIndices: { [key: number]: number } = {}; // Dictionary to store the latest index of each element

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Check if the current number has been seen before
    if (num in numIndices) {
      const previousIndex = numIndices[num];

      // Check the distance between indices
      if (i - previousIndex <= k) {
        return true;
      }
    }

    // Update the dictionary with the current index of the number
    numIndices[num] = i;
  }

  return false;
}

// Example usage:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false
