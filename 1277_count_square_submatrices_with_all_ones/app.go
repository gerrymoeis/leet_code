package main

func countSquares(matrix [][]int) int {
	count := 0
	for i := range len(matrix) {
		for j := range len(matrix[0]) {
			if matrix[i][j] == 1 && i > 0 && j > 0 {
				matrix[i][j] = min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1
			}
			count += matrix[i][j]
		}
	}
	return count
}
