/*

942. DI String Match

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 

Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: s = "III"
Output: [0,1,2,3]
Example 3:

Input: s = "DDI"
Output: [3,2,0,1]
 

Constraints:

1 <= s.length <= 105
s[i] is either 'I' or 'D'.

Topics
Array
Two Pointers
String
Greedy

*/

function diStringMatch(s: string): number[] {
  const n = s.length;
  const perm: number[] = new Array(n + 1);
  let low = 0,
    high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      perm[i] = low++;
    } else {
      perm[i] = high--;
    }
  }

  // The last element will be the remaining low or high (they are equal now)
  perm[n] = low; // or high since low == high at this point

  return perm;
}

// Example usage:
console.log(diStringMatch("IDID")); // Output: [0, 4, 1, 3, 2]
console.log(diStringMatch("III")); // Output: [0, 1, 2, 3]
console.log(diStringMatch("DDI")); // Output: [3, 2, 0, 1]
