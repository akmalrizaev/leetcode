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

function majorityElement(nums) {
    let count = 0, candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num; // Set a new candidate
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Example usage:
console.log(majorityElement([3, 2, 3]));         // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
