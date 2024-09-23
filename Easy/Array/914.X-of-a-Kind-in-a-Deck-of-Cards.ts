/*

914. X of a Kind in a Deck of Cards

You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
 

Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104

Topics
Array
Hash Table
Math
Counting
Number Theory

*/

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function hasGroupsSizeX(deck: number[]): boolean {
  // Step 1: Count the frequency of each card
  const countMap = new Map<number, number>();
  for (const card of deck) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  // Step 2: Get the GCD of all counts
  let g = -1;
  for (const count of countMap.values()) {
    if (g === -1) {
      g = count;
    } else {
      g = gcd(g, count);
    }
  }

  // Step 3: Check if the GCD is at least 2
  return g >= 2;
}

// Example usage:
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // Output: true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // Output: false
console.log(hasGroupsSizeX([1])); // Output: false
console.log(hasGroupsSizeX([1, 1])); // Output: true
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])); // Output: true
