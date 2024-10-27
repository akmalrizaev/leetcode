/*

1200. Minimum Absolute Difference

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 

Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106

Topics
Array
Sorting

*/

function minimumAbsDifference(arr: number[]): number[][] {
  // Sort the array to ensure minimum differences are between consecutive elements
  arr.sort((a, b) => a - b);

  const result: number[][] = [];
  let minDiff = Number.MAX_SAFE_INTEGER;

  // Calculate the minimum difference by comparing consecutive pairs
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      result.length = 0; // Clear the result array if a new minimum difference is found
    }
    if (diff === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }

  return result;
}

// Example Usage:
console.log(minimumAbsDifference([4, 2, 1, 3])); // Output: [[1, 2], [2, 3], [3, 4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // Output: [[1, 3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // Output: [[-14, -10], [19, 23], [23, 27]]
