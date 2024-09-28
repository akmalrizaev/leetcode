/*

941. Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104

Topics
Array

*/

function validMountainArray(arr: number[]): boolean {
  const n = arr.length;

  // A mountain array must have at least 3 elements
  if (n < 3) return false;

  let i = 0;

  // Climbing up: strict increasing part
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  // Peak can't be the first or the last element
  if (i === 0 || i === n - 1) return false;

  // Climbing down: strict decreasing part
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  // If we reached the end, it means the array is a valid mountain
  return i === n - 1;
}

// Example usage:
console.log(validMountainArray([2, 1])); // Output: false
console.log(validMountainArray([3, 5, 5])); // Output: false
console.log(validMountainArray([0, 3, 2, 1])); // Output: true
