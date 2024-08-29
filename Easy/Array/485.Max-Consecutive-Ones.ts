/*

485. Max Consecutive Ones


Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

 

Constraints:

    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

Topics
Array

*/

function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0; // Max consecutive ones found so far
  let currentCount = 0; // Current consecutive ones streak

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++; // Increment current streak
    } else {
      maxCount = Math.max(maxCount, currentCount); // Update maxCount if currentCount is greater
      currentCount = 0; // Reset current streak
    }
  }

  // Compare maxCount with the last streak
  maxCount = Math.max(maxCount, currentCount);

  return maxCount;
}

// Example usage:
const nums1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums1)); // Output: 3

const nums2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums2)); // Output: 2

const nums3 = [0, 0, 0, 0];
console.log(findMaxConsecutiveOnes(nums3)); // Output: 0

const nums4 = [1, 1, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums4)); // Output: 5
