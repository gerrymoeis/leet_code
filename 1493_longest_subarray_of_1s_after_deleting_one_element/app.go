package main

func longestSubarray(nums []int) int {
	prev, curr, res := 0, 0, 0
	hasZero := false
	for _, num := range nums {
		if num == 1 {
			curr++
		} else {
			prev = curr
			curr = 0
			hasZero = true
		}
		res = max(res, prev+curr)
	}
	if hasZero {
		return res
	}
	return len(nums) - 1
}
