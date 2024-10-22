/*

40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 

Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

Topics
Array
Backtracking

*/

function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b); // Step 1: Sort candidates to handle duplicates

  function backtrack(start: number, current: number[], target: number) {
    if (target === 0) {
      result.push([...current]); // Found a valid combination
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Step 3: Skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (candidates[i] > target) {
        break; // No need to continue if the candidate is greater than the remaining target
      }

      current.push(candidates[i]); // Choose the candidate
      backtrack(i + 1, current, target - candidates[i]); // Recur with reduced target and next index
      current.pop(); // Backtrack
    }
  }

  backtrack(0, [], target);
  return result;
}

// Example usage:
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
// Output: [[1,2,2],[5]]
