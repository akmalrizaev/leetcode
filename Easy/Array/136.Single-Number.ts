/*

  136. Single Number


  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

 

Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.

Topics
Array
Bit Manipulation

*/

function singleNumber(nums: number[]): number {
  let result = 0;

  // XOR all numbers in the array
  for (const num of nums) {
    result ^= num;
  }

  return result;
}

// Example usage:
const nums136_1 = [2, 2, 1];
console.log(singleNumber(nums136_1)); // Output: 1

const nums136_2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums136_2)); // Output: 4

const nums136_3 = [1];
console.log(singleNumber(nums136_3)); // Output: 1
