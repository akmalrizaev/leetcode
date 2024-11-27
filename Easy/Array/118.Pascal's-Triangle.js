/*

118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1

 Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30

Topics
Array
Dynamic Programming


*/

function generate(numRows) {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1); // Start with 1s

        // Fill in the middle values
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row); // Add the row to the triangle
    }

    return triangle;
}

// Example usage:
console.log(generate(5)); 
// Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
