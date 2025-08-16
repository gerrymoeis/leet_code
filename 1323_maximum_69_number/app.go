package main

import "math"

func maximum69Number(num int) int {
	digits := int(math.Log10(float64(num)))
	n := num
	for i := digits; i >= 0; i-- {
		powerOf10 := int(math.Pow(10, float64(i)))
		d := n / powerOf10
		if d == 6 {
			return num + 3*powerOf10
		}
		n -= d * powerOf10
	}
	return num
}
