/*
    66. Plus One


    You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

 

Constraints:

    1 <= digits.length <= 100
    0 <= digits[i] <= 9
    digits does not contain any leading 0's.

    Topics
Array
Math

*/

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++; // Increment the current digit if it's less than 9
      return digits; // Return the result array
    }
    digits[i] = 0; // Set the current digit to 0 if it was 9 (carry over)
  }

  // If the loop completes, we need to add a leading 1 (case like 999 -> 1000)
  digits.unshift(1);
  return digits;
}

// Example usage:
let digits1 = [1, 2, 3];
console.log(plusOne(digits1)); // Output: [1, 2, 4]

let digits2 = [4, 3, 2, 1];
console.log(plusOne(digits2)); // Output: [4, 3, 2, 2]

let digits3 = [9];
console.log(plusOne(digits3)); // Output: [1, 0]

let digits4 = [9, 9, 9];
console.log(plusOne(digits4)); // Output: [1, 0, 0, 0]

let digits5 = [0];
console.log(plusOne(digits5)); // Output: [1]
