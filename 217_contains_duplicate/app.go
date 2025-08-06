package main

func containsDuplicate(nums []int) bool {
	mapNums := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		_, has := mapNums[nums[i]]
		if has {
			return true
		}
		mapNums[nums[i]] = i
	}
	return false
}
