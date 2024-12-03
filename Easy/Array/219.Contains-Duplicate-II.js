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

function containsNearbyDuplicate(nums, k) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numIndices.has(nums[i]) && i - numIndices.get(nums[i]) <= k) {
            return true; // Found a valid pair
        }
        numIndices.set(nums[i], i); // Update the index of the current number
    }

    return false; // No such pair found
}

// Example usage:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));      // Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));      // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false
