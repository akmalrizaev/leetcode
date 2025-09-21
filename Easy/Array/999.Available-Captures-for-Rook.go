/*

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

⏱ Time Complexity: O(1) (since board is always 8×8, constant size)
📦 Space Complexity: O(1)

*/

package main

import "fmt"

func numRookCaptures(board [][]byte) int {
	// Step 1: Find the position of the rook 'R'
	var rookRow, rookCol int
	found := false
	for i := 0; i < 8 && !found; i++ {
		for j := 0; j < 8; j++ {
			if board[i][j] == 'R' {
				rookRow, rookCol = i, j
				found = true
				break
			}
		}
	}

	// Step 2: Check in 4 directions (up, down, left, right)
	directions := [][]int{
		{-1, 0}, // up
		{1, 0},  // down
		{0, -1}, // left
		{0, 1},  // right
	}

	captures := 0

	for _, d := range directions {
		r, c := rookRow, rookCol
		for {
			r += d[0]
			c += d[1]
			if r < 0 || r >= 8 || c < 0 || c >= 8 || board[r][c] == 'B' {
				// Out of bounds or bishop blocks the way
				break
			}
			if board[r][c] == 'p' {
				// Can capture a pawn
				captures++
				break
			}
		}
	}

	return captures
}

func main() {
	board1 := [][]byte{
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'.', '.', '.', 'R', '.', '.', '.', 'p'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
	}
	fmt.Println(numRookCaptures(board1)) // 3

	board2 := [][]byte{
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', 'p', 'p', 'p', 'p', 'p', '.', '.'},
		{'.', 'p', 'p', 'B', 'p', 'p', '.', '.'},
		{'.', 'p', 'B', 'R', 'B', 'p', '.', '.'},
		{'.', 'p', 'p', 'B', 'p', 'p', '.', '.'},
		{'.', 'p', 'p', 'p', 'p', 'p', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
	}
	fmt.Println(numRookCaptures(board2)) // 0
}
