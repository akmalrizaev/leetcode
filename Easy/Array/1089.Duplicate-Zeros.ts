/*

1089. Duplicate Zeros

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 9

Topics
Array
Two Pointers

*/

function duplicateZeros(arr: number[]): void {
  // Step 1: Count how many zeros will need to be duplicated
  let zeros = 0;
  const length = arr.length;

  // Count zeros but stop early if the total size (with duplicates) would exceed array length
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) zeros++;
  }

  // Step 2: Start from the end of the array and shift elements to the right
  let i = length - 1;
  let j = length + zeros - 1; // Index in the "virtual" larger array

  // Traverse the array backwards
  while (i < j) {
    if (j < length) {
      arr[j] = arr[i];
    }

    // If the current element is zero, duplicate it
    if (arr[i] === 0) {
      j--;
      if (j < length) {
        arr[j] = 0; // Duplicate zero
      }
    }

    i--;
    j--;
  }
}

// Example usage:
const arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log(arr1); // Output: [1,0,0,2,3,0,0,4]

const arr2 = [1, 2, 3];
duplicateZeros(arr2);
console.log(arr2); // Output: [1,2,3]
