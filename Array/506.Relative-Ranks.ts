/*

506. Relative Ranks


You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

    The 1st place athlete's rank is "Gold Medal".
    The 2nd place athlete's rank is "Silver Medal".
    The 3rd place athlete's rank is "Bronze Medal".
    For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

Return an array answer of size n where answer[i] is the rank of the ith athlete.

 

Example 1:

Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

Example 2:

Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

 

Constraints:

    n == score.length
    1 <= n <= 104
    0 <= score[i] <= 106
    All the values in score are unique.

Topics
Array
Sorting
Heap (Priority Queue)

*/

function findRelativeRanks(score: number[]): string[] {
  const n = score.length;
  const result: string[] = new Array(n);

  // Create an array of [score, index] pairs and sort it by score in descending order
  const sortedScores = score
    .map((val, idx) => [val, idx] as [number, number])
    .sort((a, b) => b[0] - a[0]);

  // Assign ranks based on the sorted order
  for (let i = 0; i < n; i++) {
    const [val, idx] = sortedScores[i];
    if (i === 0) {
      result[idx] = "Gold Medal";
    } else if (i === 1) {
      result[idx] = "Silver Medal";
    } else if (i === 2) {
      result[idx] = "Bronze Medal";
    } else {
      result[idx] = (i + 1).toString();
    }
  }

  return result;
}

// Example usage:
const score1 = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(score1)); // Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]

const score2 = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score2)); // Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
