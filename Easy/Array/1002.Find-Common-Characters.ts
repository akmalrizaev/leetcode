/*

1002. Find Common Characters

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.

Topics
Array
Hash Table
String

*/

function commonChars(words: string[]): string[] {
  // Initialize the minFreq array with a large value (Infinity)
  let minFreq = new Array(26).fill(Infinity);

  // Iterate over each word in the input array
  for (let word of words) {
    // Initialize a frequency array for the current word
    let currFreq = new Array(26).fill(0);

    // Count the frequency of each character in the current word
    for (let char of word) {
      currFreq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    // Update the global minFreq array by taking the minimum frequency
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], currFreq[i]);
    }
  }

  // Build the result based on the final minFreq array
  let result: string[] = [];
  for (let i = 0; i < 26; i++) {
    while (minFreq[i] > 0) {
      result.push(String.fromCharCode(i + "a".charCodeAt(0)));
      minFreq[i]--;
    }
  }

  return result;
}

// Example usage:
console.log(commonChars(["bella", "label", "roller"])); // Output: ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // Output: ["c","o"]
