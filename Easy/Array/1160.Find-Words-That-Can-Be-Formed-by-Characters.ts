/*

1160. Find Words That Can Be Formed by Characters

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.

Topics
Array
Hash Table
String
Counting

*/

function countCharacters(words: string[], chars: string): number {
  // Create a frequency map for the available characters in `chars`
  const charCount = new Map<string, number>();
  for (const ch of chars) {
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }

  let totalLength = 0;

  // Helper function to check if the word can be formed
  const canFormWord = (word: string): boolean => {
    const wordCount = new Map<string, number>();
    for (const ch of word) {
      wordCount.set(ch, (wordCount.get(ch) || 0) + 1);
    }

    for (const [ch, count] of wordCount) {
      if ((charCount.get(ch) || 0) < count) {
        return false; // Not enough characters to form the word
      }
    }
    return true; // Word can be formed
  };

  // Iterate through each word in words and check if it can be formed
  for (const word of words) {
    if (canFormWord(word)) {
      totalLength += word.length; // Add the length of the word if it can be formed
    }
  }

  return totalLength;
}

// Example Usage:
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // Output: 6
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")); // Output: 10
