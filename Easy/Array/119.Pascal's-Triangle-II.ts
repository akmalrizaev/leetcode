/*

119. Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

Topics
Array
Dynamic Programming

*/

function getRow(rowIndex: number): number[] {
  const row: number[] = new Array(rowIndex + 1).fill(0);
  row[0] = 1; // The first element is always 1

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }

  return row;
}

// Example usage:
console.log(getRow(3)); // Output: [1, 3, 3, 1]
console.log(getRow(0)); // Output: [1]
console.log(getRow(1)); // Output: [1, 1]