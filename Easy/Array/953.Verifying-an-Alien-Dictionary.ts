/*

953. Verifying an Alien Dictionary

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

Topics
Array
Hash Table
String

*/

function isAlienSorted(words: string[], order: string): boolean {
  // Step 1: Create a map of each character to its position in the alien dictionary
  const alienOrder = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    alienOrder.set(order[i], i);
  }

  // Step 2: Helper function to compare two words
  const compareWords = (word1: string, word2: string): boolean => {
    const minLength = Math.min(word1.length, word2.length);
    for (let i = 0; i < minLength; i++) {
      const char1 = word1[i];
      const char2 = word2[i];
      if (char1 !== char2) {
        // Compare characters based on the alien dictionary order
        return alienOrder.get(char1)! < alienOrder.get(char2)!;
      }
    }
    // If all characters are the same up to the length of the shorter word,
    // check if the first word is longer than the second (should return false)
    return word1.length <= word2.length;
  };

  // Step 3: Compare adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    if (!compareWords(words[i], words[i + 1])) {
      return false;
    }
  }

  return true;
}

// Example usage:
const words1 = ["hello", "leetcode"];
const order1 = "hlabcdefgijkmnopqrstuvwxyz";
console.log(isAlienSorted(words1, order1)); // Output: true

const words2 = ["word", "world", "row"];
const order2 = "worldabcefghijkmnpqstuvxyz";
console.log(isAlienSorted(words2, order2)); // Output: false

const words3 = ["apple", "app"];
const order3 = "abcdefghijklmnopqrstuvwxyz";
console.log(isAlienSorted(words3, order3)); // Output: false
