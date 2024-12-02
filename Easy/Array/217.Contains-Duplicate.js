/*

  217. Contains Duplicate


  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

Topics
Array
Hash Table
Sorting

*/

function containsDuplicate(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num);
    }

    return false; // No duplicates
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1]));      // Output: true
console.log(containsDuplicate([1, 2, 3, 4]));      // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4])); // Output: true
