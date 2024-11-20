/*

    448. Find All Numbers Disappeared in an Array

    Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

 

Constraints:

    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n

 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Topics
Array
Hash Table

*/

function findDisappearedNumbers(nums) {
    const result = [];
    const n = nums.length;

    // Mark indices
    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // Mark as visited by making it negative
        }
    }

    // Find indices that are still positive
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}

// Example usage:
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
console.log(findDisappearedNumbers([1, 1])); // Output: [2]
console.log(findDisappearedNumbers([2, 2])); // Output: [1]
