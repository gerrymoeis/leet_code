/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if (nums.length <= 3 || nums[0] > nums[1]) return false;
    let increasing = true;
    let count = 1;
    for (let i=1; i < nums.length; ++i) {
        if (nums[i-1] === nums[i]) return false;
        if (increasing) {
            if (nums[i-1] > nums[i]) {
                increasing = false;
                count++;
            }
        } else {
            if (nums[i-1] < nums[i]) {
                increasing = true;
                count++;
            }
        }
    }
    return count !== 3 ? false : true;
};

const tests = [
    [1,3,5,4,2,6],
    [2,1,3],
    [1,3,1,4]
]

for (const test of tests) {
    console.log(isTrionic(test));
}

// Experiment
// var isTrionic = function(nums) {
//     if (nums.length <= 3) return false;
//     const slice = Math.round(nums.length/3);
//     const p = nums.slice(0,slice+1);
//     const q = nums.slice(slice, slice*2+1);
//     const r = nums.slice(slice*2);

//     for (let i=1; i < p.length; ++i) {
//         if (p[i-1] > p[i]) return false;
//     }
//     for (let i=1; i < q.length; ++i) {
//         if (q[i-1] < q[i]) return false;
//     }
//     for (let i=1; i < r.length; ++i) {
//         if (r[i-1] > r[i]) return false;
//     }

//     console.log(p,q,r);
//     return true;
// };


// Attempts

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if (nums.length <= 3) return false;
    let increasing = true;
    let count = 1;
    for (let i=1; i < nums.length; ++i) {
        if (increasing) {
            if (nums[i-1] > nums[i]) {
                increasing = false;
                
            }
            count++;
        } else {
            if (nums[i-1] < nums[i]) {
                increasing = true;
                
            }
            count++;
        }
        console.log(count, increasing)
    }
    // return count === 3 || increasing ? true : false;
    // if (count !== 3) {
    //     return false
    // }
    // else if (increasing) {
    //     return true;
    // }
    return count !== 3 ? false : true;
};




// Attempts 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if (nums.length <= 3) return false;
    let increasing = true;
    let count = 0;
    const trionic = [1,0,0];
    for (let i=1; i < nums.length; ++i) {
        if (nums[i-1] === nums[i]) return false;
        if (increasing) {
            if (nums[i-1] > nums[i]) {
                increasing = false;
                count++;
                trionic[count] = 1;
            }
        } else {
            if (nums[i-1] < nums[i]) {
                increasing = true;
                count++;
                trionic[count] = 1;
            }
        }
        console.log(count, increasing)
        console.log(trionic)
    }
    return trionic[0] === 1 && trionic[1] === 0 && trionic[2] === 1;
};