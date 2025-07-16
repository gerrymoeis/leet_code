/**
 * @param {number[]} nums
 * @return {number}
 */
// My Code
var maximumLength = function(nums) {
    if (nums.length <= 2) return nums.length
    
    let [even, odd, alt] = [0,0,0]
    let parity = -1
    for (num of nums) {
      if (num % 2 !== parity) {
        alt++
        parity = num % 2
      }
      if (num % 2 === 0) {
        even++
      }
      else {
        odd++
      }
    }
    return Math.max(even,odd,alt)
};

// let nums = [1,2,3,4]
// let nums = [1,2,1,1,2,1,2]
// let nums = [1, 100, 3, 5, 7, 102, 9, 11]
let nums = [2, 1, 100, 3]
console.log(maximumLength(nums))

// AI Code from My Code
var maximumLength = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let [even, odd, altEven, altOdd] = [0, 0, 0, 0];
    let [lastAltEven, lastAltOdd] = [-1, -1];
    
    for (let num of nums) {
        let p = num & 1;
        
        // Count all even and all odd
        if (p === 0) even++; else odd++;
        
        // Alternating starting with even
        if (altEven === 0 && p === 0) {
            altEven = 1;
            lastAltEven = 0;
        } else if (altEven > 0 && p !== lastAltEven) {
            altEven++;
            lastAltEven = p;
        }
        
        // Alternating starting with odd  
        if (altOdd === 0 && p === 1) {
            altOdd = 1;
            lastAltOdd = 1;
        } else if (altOdd > 0 && p !== lastAltOdd) {
            altOdd++;
            lastAltOdd = p;
        }
    }
    
    return Math.max(even, odd, altEven, altOdd);
};

// Attempt 1 Failed
// var maximumLength = function(nums) {
//     if (nums.length <= 2) return nums.length
    
//     let x = 2
//     let sub = nums[0]
//     let mod = (sub + nums[1]) % 2
    
//     console.log(mod)
//     for (let i=2; i < nums.length; i++) {
//       sub = nums[i-1]
//       console.log(sub, nums[i], (sub + nums[i]) % 2)
//       if ((sub + nums[i]) % 2 !== mod) break
//       x++
//     }
    
//     return x
// };

// Attempt 2 - Failed
// var maximumLength = function(nums) {
//     if (nums.length <= 2) return nums.length
    
//     let x = 2
//     let sub = nums[0]
    
//     for (let i=2; i < nums.length; i++) {
//       sub = nums[i-1]
//       if ((sub + nums[i]) % 2 !== nums[0] + nums[1] % 2) continue
      
//       x++
//     }
    
//     return x
// };

// Attempt 3 - Failed
// var maximumLength = function(nums) {
//     if (nums.length <= 2) return nums.length
    
//     let [even, odd, alt] = [0,0,0]
//     for (let i=1; i < nums.length + 1; i++) {
//       if ((nums[i-1] + nums[i]) % 2 !== 0) {
//         alt++
//       }
//       if (nums[i-1] % 2 === 0) {
//         even++
//       }
//       if (nums[i-1] % 2 !== 0) {
//         odd++
//       }
//     }
//     return Math.max(even,odd,alt)
// };

// Experiment
// var maximumLength = function(nums) {
//     if (nums.length <= 2) return nums.length
    
//     let [even, odd] = [1,1]
//     for (let i=1; i < nums.length; i++) {
//       if ((nums[i-1] + nums[i]) % 2 === 0) {
//         even++
//       }
//       else {
//         odd++
//       }
//     }
//     return even > odd ? even : odd
// };


// var maximumLength = function(nums) {
//     if (nums.length <= 2) return nums.length
    
//     let [even, odd, alt] = [0,0,0]
//     for (let i=1; i < nums.length + 1; i++) {
//       console.log("anjay", nums[i-1], i)
//       if ((nums[i-1] + nums[i]) % 2 !== 0) {
//         alt++
//       }
//       if (nums[i-1] % 2 === 0) {
//         even++
//       }
//       if (nums[i-1] % 2 !== 0) {
//         odd++
//       }
//     }
    
//     // for (const [index, num] of myArray.entries()) {
//     //   if (num + nums[index+1] % 2 !== 0 && i < nums.length-1) {
//     //     alt++
//     //   }
//     //   else if (num % 2 === 0) {
//     //     even++
//     //   }
//     //   else {
//     //     odd++
//     //   }
//     // }
    
//     console.log(even, odd, alt)
// };