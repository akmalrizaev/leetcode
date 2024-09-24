/*

922. Sort Array By Parity II

Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3]
 

Constraints:

2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000

Topics
Array
Two Pointers
Sorting

*/

function sortArrayByParityII(nums: number[]): number[] {
  let evenIdx = 0;
  let oddIdx = 1;
  const n = nums.length;

  while (evenIdx < n && oddIdx < n) {
    // Find the next even-indexed position with an odd number
    while (evenIdx < n && nums[evenIdx] % 2 === 0) {
      evenIdx += 2;
    }
    // Find the next odd-indexed position with an even number
    while (oddIdx < n && nums[oddIdx] % 2 === 1) {
      oddIdx += 2;
    }
    // Swap the numbers at evenIdx and oddIdx
    if (evenIdx < n && oddIdx < n) {
      [nums[evenIdx], nums[oddIdx]] = [nums[oddIdx], nums[evenIdx]];
    }
  }
  return nums;
}

// Example usage:
console.log(sortArrayByParityII([4, 2, 5, 7])); // Output: [4, 5, 2, 7] or any valid solution
console.log(sortArrayByParityII([2, 3])); // Output: [2, 3]
