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

⏱ Time Complexity: O(26 * n * m),
where n = number of words, m = average word length (but 26 is constant → effectively O(n*m)).

📦 Space Complexity: O(26) = O(1).

*/

package main

import (
	"fmt"
)

func commonChars(words []string) []string {
	// Step 1: Initialize minFreq with large values (26 letters)
	minFreq := make([]int, 26)
	for i := 0; i < 26; i++ {
		minFreq[i] = 10000
	}

	// Step 2: For each word, count frequencies
	for _, word := range words {
		freq := make([]int, 26)
		for _, ch := range word {
			freq[ch-'a']++
		}
		// Update minFreq
		for i := 0; i < 26; i++ {
			if freq[i] < minFreq[i] {
				minFreq[i] = freq[i]
			}
		}
	}

	// Step 3: Build result from minFreq
	result := []string{}
	for i := 0; i < 26; i++ {
		for j := 0; j < minFreq[i]; j++ {
			result = append(result, string('a'+i))
		}
	}
	return result
}

func main() {
	fmt.Println(commonChars([]string{"bella", "label", "roller"})) // ["e","l","l"]
	fmt.Println(commonChars([]string{"cool", "lock", "cook"}))     // ["c","o"]
}
