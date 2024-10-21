/*

1122. Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
 

Constraints:

1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.

Topics
Array
Hash Table
Sorting
Counting Sort

*/

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  // Step 1: Create a frequency map for arr1
  const freqMap: Record<number, number> = {};

  for (const num of arr1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Build the result array starting with elements in arr2
  const result: number[] = [];

  for (const num of arr2) {
    if (freqMap[num]) {
      result.push(...Array(freqMap[num]).fill(num)); // Add the element multiple times
      delete freqMap[num]; // Remove the number from map once it's added
    }
  }

  // Step 3: Add remaining elements (those not in arr2) in sorted order
  const remaining: number[] = [];
  for (const num in freqMap) {
    remaining.push(...Array(freqMap[num]).fill(Number(num)));
  }

  remaining.sort((a, b) => a - b); // Sort the remaining numbers in ascending order
  result.push(...remaining);

  return result;
}
/*

Example usage:
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2)); // Output: [2,2,2,1,4,3,3,9,6,7,19]

const arr1b = [28, 6, 22, 8, 44, 17];
const arr2b = [22, 28, 8, 6];
console.log(relativeSortArray(arr1b, arr2b)); // Output: [22,28,8,6,17,44]

*/
