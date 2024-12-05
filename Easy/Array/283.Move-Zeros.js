/*

   283. Move Zeroes

   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?

Topics
Array
Two Pointers

*/

function moveZeroes(nums) {
    let nonZeroIndex = 0;

    // Move non-zero elements to the front
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            nums[nonZeroIndex] = nums[current];
            nonZeroIndex++;
        }
    }

    // Fill the rest of the array with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums; // Optional, as the array is modified in place
}

// Example usage:
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroes([0]));              // Output: [0]
console.log(moveZeroes([1, 0, 2, 0, 0]));  // Output: [1, 2, 0, 0, 0]
