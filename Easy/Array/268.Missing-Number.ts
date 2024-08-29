/*

  268. Missing Number


  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 

Constraints:

    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= n
    All the numbers of nums are unique.

 

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

*/

function missingNumber(nums: number[]): number {
  // Calculate the expected sum of numbers from 0 to n
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of numbers in the array
  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  // The missing number is the difference between the expected sum and actual sum
  return expectedSum - actualSum;
}

// Example usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
console.log(missingNumber([0])); // Output: 1
