/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (const num of nums) {
        if (num !== first && num !== second && num !== third) {
            if (num > first) {
                third = second;
                second = first;
                first = num;
            } else if (num > second) {
                third = second;
                second = num;
            } else if (num > third) {
                third = num;
            }
        }
    }
    return third === -Infinity ? first : third;
};


// Experiment
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length === 3) return Math.min(...nums);
    if (nums.length < 3) return Math.max(...nums);
    const max_three = new Array(3);
    max_three[0] = nums[0];
    let count = 0;
    for (let i=0; i < nums.length; ++i) {
        if (nums[i] > max_three[count]) {
            max_three[count] = nums[i];
            count++;
            if (count > 2) count = 0;
        }
        console.log(max_three, count)
    }
    return max_three[2] ?? Math.max(...max_three);
};