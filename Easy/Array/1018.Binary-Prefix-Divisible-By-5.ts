/*

Problem 1018: Binary Prefix Divisible By 5

You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

 

Example 1:

Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.
Example 2:

Input: nums = [1,1,1]
Output: [false,false,false]
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

Topics
Array
Bit Manipulation

*/

function prefixesDivBy5(A: number[]): boolean[] {
  const result: boolean[] = [];
  let currentNumber = 0;

  for (let i = 0; i < A.length; i++) {
    // Calculate the new number as binary and use modulo 5 to avoid large numbers
    currentNumber = (currentNumber * 2 + A[i]) % 5;

    // Check if the current number is divisible by 5
    result.push(currentNumber === 0);
  }

  return result;
}

// Example usage:
console.log(prefixesDivBy5([0, 1, 1])); // Output: [true, false, false]
console.log(prefixesDivBy5([1, 1, 1])); // Output: [false, false, false]
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1])); // Output: [true, false, false, false, true, false]
console.log(prefixesDivBy5([1, 1, 1, 0, 1])); // Output: [false, false, false, false, false]
