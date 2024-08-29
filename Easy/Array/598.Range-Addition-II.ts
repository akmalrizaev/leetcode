/*

598. Range Addition II


You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.

 

Example 1:


Input: m = 3, n = 3, ops = [[2,2],[3,3]]
Output: 4
Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
Example 2:

Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
Output: 4
Example 3:

Input: m = 3, n = 3, ops = []
Output: 9
 

Constraints:

1 <= m, n <= 4 * 104
0 <= ops.length <= 104
ops[i].length == 2
1 <= ai <= m
1 <= bi <= n

Topics
Array
Math

*/

function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length === 0) return m * n;

  let minA = m;
  let minB = n;

  for (const [ai, bi] of ops) {
    minA = Math.min(minA, ai);
    minB = Math.min(minB, bi);
  }

  return minA * minB;
}

// Example usage:
const m1 = 3,
  n1 = 3,
  ops1 = [
    [2, 2],
    [3, 3],
  ];
console.log(maxCount(m1, n1, ops1)); // Output: 4

const m2 = 3,
  n2 = 3,
  ops2 = [
    [2, 2],
    [3, 3],
    [3, 3],
  ];
console.log(maxCount(m2, n2, ops2)); // Output: 4

const m3 = 3,
  n3 = 3,
  ops3 = [];
console.log(maxCount(m3, n3, ops3)); // Output: 9
