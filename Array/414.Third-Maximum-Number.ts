/*

  414. Third Maximum Number


  Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Can you find an O(n) solution?

Topics
Array
Sorting

*/

function thirdMax(nums: number[]): number {
  // Initialize three variables to track maximums
  let firstMax: number | null = null;
  let secondMax: number | null = null;
  let thirdMax: number | null = null;

  for (const num of nums) {
    // Skip if the current number is already one of the maximums
    if (num === firstMax || num === secondMax || num === thirdMax) {
      continue;
    }

    // Update first, second, and third maximums
    if (firstMax === null || num > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (secondMax === null || num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (thirdMax === null || num > thirdMax) {
      thirdMax = num;
    }
  }

  // If thirdMax is still null, it means there are fewer than 3 distinct numbers
  return thirdMax === null ? firstMax! : thirdMax;
}

// Example usage:
const nums414_1 = [3, 2, 1];
console.log(thirdMax(nums414_1)); // Output: 1

const nums414_2 = [1, 2];
console.log(thirdMax(nums414_2)); // Output: 2

const nums414_3 = [2, 2, 3, 1];
console.log(thirdMax(nums414_3)); // Output: 1

const nums414_4 = [1, 2, 2, 5, 3, 5];
console.log(thirdMax(nums4)); // Output: 2

const nums5 = [1, 2, -2147483648];
console.log(thirdMax(nums5)); // Output: -2147483648

const nums6 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(thirdMax(nums6)); // Output: 6
