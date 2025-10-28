/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let n = nums.length;
    let total = nums.reduce((sum, num) => sum + num, 0);
    let suffix = 0;
    let ans = 0;
    for (let i = 0; i < n; i++){
        let temp = total - suffix;
        if (nums[i] === 0){
            if (temp === suffix){
                ans += 2;
            } else if (Math.abs(temp - suffix) === 1){
                ans += 1;
            }
        }
        suffix += nums[i];
    }
    return ans;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let total = 0, left = 0, right = 0, first = 0;
    for (let i=0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            left = right + left;
            first = 1;
        }
        else {
            left += nums[i];
            if (first) right += nums[i];
        }
    }
    console.log(left, right)
    return total;
};