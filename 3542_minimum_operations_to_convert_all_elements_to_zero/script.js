/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const stack = new Array(nums.length + 1).fill(0);
    let top = 0, ans = 0;
    for (let i = 0; i < nums.length; i++) {
      while (stack[top] > nums[i]) {
        top--;
        ans++;
      }
      if (stack[top] !== nums[i]) stack[++top] = nums[i];
    }
    return ans + top;
};