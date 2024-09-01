/*

744. Find Smallest Letter Greater Than Target

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.

Topics
Array
Binary Search

*/

function nextGreatestLetter(letters: string[], target: string): string {
  let low = 0;
  let high = letters.length;

  // Binary search to find the smallest character greater than target
  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (letters[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  // If low is equal to the length of letters, it means target is greater than or equal to all elements in letters
  // So we wrap around using `low % letters.length`
  return letters[low % letters.length];
}

// Example usage
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // Output: "f"
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // Output: "f"
console.log(nextGreatestLetter(["c", "f", "j"], "g")); // Output: "j"
console.log(nextGreatestLetter(["c", "f", "j"], "j")); // Output: "c"
console.log(nextGreatestLetter(["c", "f", "j"], "k")); // Output: "c"
