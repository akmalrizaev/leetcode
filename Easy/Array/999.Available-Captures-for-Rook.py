"""
999. Available Captures for Rook

You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'. Empty squares are represented by '.'.

A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece or the edge of the board. A rook is attacking a pawn if it can move to the pawn's square in one move.

Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.

Return the number of pawns the white rook is attacking.

Example 1:
Input: board = [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","R",".",".",".","p"],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
Output: 3
Explanation: The rook can capture all the pawns.

Example 2:
Input: board = [
  [".",".",".",".",".",".",".","."],
  [".","p","p","p","p","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","B","R","B","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","p","p","p","p",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
Output: 0
Explanation: The rook cannot capture any pawns.

Example 3:
Input: board = [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".","p","p","R","p","p",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
Output: 3
Explanation:

The rook is attacking the pawns at positions b5, d6, and f5.

 

Constraints:

board.length == 8
board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'

Topics
Array
Matrix
Simulation

"""

from typing import List


class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        # Locate the rook
        rook_position = (-1, -1)
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    rook_position = (i, j)
                    break
            if rook_position != (-1, -1):
                break

        # Directions: up, down, left, right
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        captures = 0

        # Simulate movement in each direction
        for dx, dy in directions:
            x, y = rook_position
            while 0 <= x < 8 and 0 <= y < 8:
                x += dx
                y += dy
                if not (0 <= x < 8 and 0 <= y < 8):  # Out of bounds
                    break
                if board[x][y] == 'B':  # Blocked by a bishop
                    break
                if board[x][y] == 'p':  # Captures a pawn
                    captures += 1
                    break

        return captures


# Example usage
solution = Solution()

board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
]
print(solution.numRookCaptures(board))  # Output: 3

board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
]
print(solution.numRookCaptures(board))  # Output: 1
