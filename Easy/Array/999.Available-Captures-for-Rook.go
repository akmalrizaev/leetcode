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

⏱ Time Complexity: O(n + m), where m = len(trust)
📦 Space Complexity: O(n)

*/

package main

func findJudge(n int, trust [][]int) int {
	// indegree[i] = how many people trust i
	// outdegree[i] = how many people i trusts
	indegree := make([]int, n+1)
	outdegree := make([]int, n+1)

	for _, t := range trust {
		a, b := t[0], t[1]
		outdegree[a]++
		indegree[b]++
	}

	for i := 1; i <= n; i++ {
		// Judge trusts nobody → outdegree[i] == 0
		// Everyone else trusts Judge → indegree[i] == n-1
		if outdegree[i] == 0 && indegree[i] == n-1 {
			return i
		}
	}
	return -1
}
