/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const answers = new Array(nums.length);
    const last_seen_at = new Array(30);
    for (let i=nums.length-1; i >= 0; --i) {
        for (let k=0; k < last_seen_at.length; ++k) {
            if ((nums[i] & (1 << k)) !== 0) {
                last_seen_at[k] = i;
            }
        }
        let furthest_reach = i;
        for (const location of last_seen_at) {
            if (location !== undefined) {
                furthest_reach = Math.max(furthest_reach, location);
            }
        }
        const length = furthest_reach - i + 1;
        answers[i] = length;
    }
    return answers;
};

const tests = [
    [1,0,2,1,3],
    [1,2],
    [0,0,0,0,0,0,0,1,2,4,8,16,32,64,128,256,512,1024,0,1]
]

for (const test of tests) {
    console.log(smallestSubarrays(test))
}

// Experiment
// var smallestSubarrays = function(nums) {
//     let subs = [];
//     let maxOr = 0;
//     let left = 0;
//     for (let i=0; i < nums.length; ++i) {
//         if (maxOr |= nums[i] < maxOr) {
//             subs.push(i+1);
//             left = i;
//         }
//         maxOr |= nums[i];
//     }
//     // for (let i=0; i < nums.length; ++i) {
//     //     subs.push(nums.length-i)
//     // }
//     return subs
// };