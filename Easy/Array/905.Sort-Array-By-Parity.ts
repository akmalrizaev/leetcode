/*

905. Sort Array By Parity

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000

Topics
Array
Two Pointers
Sorting

*/

function sortArrayByParity(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    // If left points to an even number, move it forward
    if (nums[left] % 2 === 0) {
      left++;
    }
    // If right points to an odd number, move it backward
    else if (nums[right] % 2 !== 0) {
      right--;
    }
    // Swap the even number at right with the odd number at left
    else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return nums;
}

// Example usage:
console.log(sortArrayByParity([3, 1, 2, 4])); // Output: [4,2,1,3] or other valid outputs
