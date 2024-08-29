/*

500. Keyboard Row

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 

Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 

Topics
Array
Hash Table
String

*/

function findWords(words: string[]): string[] {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  const result: string[] = [];

  for (let word of words) {
    const lowerWord = word.toLowerCase();

    if (
      isWordInRow(lowerWord, row1) ||
      isWordInRow(lowerWord, row2) ||
      isWordInRow(lowerWord, row3)
    ) {
      result.push(word);
    }
  }

  return result;
}

function isWordInRow(word: string, rowSet: Set<string>): boolean {
  for (let char of word) {
    if (!rowSet.has(char)) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // Output: ["Alaska", "Dad"]
console.log(findWords(["omk"])); // Output: []
console.log(findWords(["adsdf", "sfd"])); // Output: ["adsdf", "sfd"]
