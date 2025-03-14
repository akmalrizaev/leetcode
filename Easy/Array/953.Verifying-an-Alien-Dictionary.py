""""
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
String"
"""

from typing import List


class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        # Create a dictionary mapping each character to its rank
        order_map = {char: i for i, char in enumerate(order)}

        def is_sorted(w1: str, w2: str) -> bool:
            for c1, c2 in zip(w1, w2):
                if c1 != c2:
                    # Compare the characters based on the alien order
                    return order_map[c1] < order_map[c2]
            # If all characters are the same, the shorter word should come first
            return len(w1) <= len(w2)

        # Check all adjacent word pairs
        for i in range(len(words) - 1):
            if not is_sorted(words[i], words[i + 1]):
                return False

        return True


# Example usage
solution = Solution()
print(solution.isAlienSorted(["hello", "leetcode"],
      "hlabcdefgijkmnopqrstuvwxyz"))  # Output: True
print(solution.isAlienSorted(["word", "world", "row"],
      "worldabcefghijkmnpqstuvxyz"))  # Output: False
# Output: False
print(solution.isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"))
