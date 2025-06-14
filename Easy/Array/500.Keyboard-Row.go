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

package main

import "strings"

func findWords(words []string) []string {
	// Map each character to its corresponding row
	rowMap := map[rune]int{
		'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
		'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
		'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3,
	}

	result := []string{}

	for _, word := range words {
		// Convert word to lowercase
		lowerWord := strings.ToLower(word)
		// Check the row of the first character
		row := rowMap[rune(lowerWord[0])]
		valid := true

		// Check if all characters belong to the same row
		for _, char := range lowerWord {
			if rowMap[char] != row {
				valid = false
				break
			}
		}

		// If valid, add the word to the result
		if valid {
			result = append(result, word)
		}
	}

	return result
}
