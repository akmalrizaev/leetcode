/*

1013. Partition Array Into Three Parts With Equal Sum

Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

 

Example 1:

Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

Constraints:

3 <= arr.length <= 5 * 104
-104 <= arr[i] <= 104

Topics
Array
Greedy

*/

function canThreePartsEqualSum(arr: number[]): boolean {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // If the total sum is not divisible by 3, return false
  if (totalSum % 3 !== 0) return false;

  const targetSum = totalSum / 3;
  let partitionSum = 0;
  let partitionsFound = 0;

  // Traverse the array and find two parts that sum up to targetSum
  for (let i = 0; i < arr.length; i++) {
    partitionSum += arr[i];

    // When we find a partition with the target sum
    if (partitionSum === targetSum) {
      partitionsFound++;
      partitionSum = 0;
    }

    // We only need to find two partitions; the third will automatically work
    if (partitionsFound === 2 && i < arr.length - 1) {
      return true;
    }
  }

  return false;
}

// Example usage:
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); // Output: true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); // Output: false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); // Output: true
