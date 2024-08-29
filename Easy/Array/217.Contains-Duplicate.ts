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

function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Example usage:
const nums217_1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums217_1)); // Output: true

const nums217_2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums217_2)); // Output: false

const nums217_3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums217_3)); // Output: true
