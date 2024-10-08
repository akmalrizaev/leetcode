/*

989. Add to Array-Form of Integer

The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

Example 1:

Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
 

Constraints:

1 <= num.length <= 104
0 <= num[i] <= 9
num does not contain any leading zeros except for the zero itself.
1 <= k <= 104

Topics
Array
Math

*/

function addToArrayForm(num: number[], k: number): number[] {
  let i = num.length - 1;
  let carry = k;
  let result: number[] = [];

  while (i >= 0 || carry > 0) {
    if (i >= 0) {
      carry += num[i];
    }
    result.push(carry % 10); // Add the least significant digit to result
    carry = Math.floor(carry / 10); // Update carry for the next iteration
    i--;
  }

  return result.reverse(); // Reverse the result to get the correct order
}

// Example usage:
console.log(addToArrayForm([1, 2, 0, 0], 34)); // Output: [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 181)); // Output: [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // Output: [1,0,2,1]
