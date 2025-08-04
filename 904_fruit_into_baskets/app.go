package main

func totalFruit(fruits []int) int {
	left, point, total := 0, 0, 0
	for i := 1; i < len(fruits); i++ {
		if point > 0 && fruits[i] != fruits[i-1] && fruits[i] != fruits[point-1] {
			left = point
		}
		if fruits[i] != fruits[i-1] {
			point = i
		}
		if i-left > total {
			total = i - left
		}
	}
	return total + 1
}
