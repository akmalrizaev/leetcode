/*

628. Maximum Product of Three Numbers

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Topics
Array
Math
Sorting

*/

function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const max1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of the three largest numbers
  const max2 = nums[0] * nums[1] * nums[n - 1]; // Product of the two smallest and the largest number

  return Math.max(max1, max2);
}

// Example usage:
console.log(maximumProduct([1, 2, 3])); // Output: 6
console.log(maximumProduct([1, 2, 3, 4])); // Output: 24
console.log(maximumProduct([-1, -2, -3])); // Output: -6
console.log(maximumProduct([-4, -3, -2, -1, 60])); // Output: 720
