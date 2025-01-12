"""
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
"""
from typing import List


class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        row1 = set("qwertyuiop")
        row2 = set("asdfghjkl")
        row3 = set("zxcvbnm")

        result = []
        for word in words:
            lower_word = set(word.lower())
            if lower_word <= row1 or lower_word <= row2 or lower_word <= row3:
                result.append(word)

        return result


# Example usage
solution = Solution()
# Output: ["Alaska", "Dad"]
print(solution.findWords(["Hello", "Alaska", "Dad", "Peace"]))
print(solution.findWords(["omg", "try", "lol"])
      )                # Output: ["try"]
