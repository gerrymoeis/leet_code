/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = baskets.length;
    const blockSize = Math.floor(Math.sqrt(n));
    const blocks = [];
    
    for (let i=0; i < n; i += blockSize) {
        const end = Math.min(i + blockSize, n);
        let maxInBlock = -1;
        for (let j=i; j < end; ++j) {
            if (baskets[j] > maxInBlock) {
                maxInBlock = baskets[j];
            }
        }
        blocks.push(maxInBlock);
    }

    let count = 0;
    for (const fruit of fruits) {
        let basketFound = false;
        for (let i=0; i < blocks.length; ++i) {
            if (blocks[i] >= fruit) {
                const start = i * blockSize;
                const end = Math.min(start + blockSize, n);

                for (let j=start; j < end; ++j) {
                    if (baskets[j] >= fruit) {
                        baskets[j] = -1;
                        basketFound = true;

                        let newMax = -1;
                        for (let k=start; k <  end; ++k) {
                            if (baskets[k] > newMax) {
                                newMax = baskets[k];
                            }
                        }
                        blocks[i] = newMax;
                        break;
                    }
                }
            }
            if (basketFound) {
                break;
            }
        }
        if (!basketFound) {
            count++;
        }
    }
    return count;
};

const tests = [
    [[4,2,5], [3,5,4]],
    [[3,6,1], [6,4,7]]
]

for (const test of tests) {
    console.log(numOfUnplacedFruits(...test))
}

// Experiment
// var numOfUnplacedFruits = function(fruits, baskets) {
//     const n = baskets.length;
//     const blockSize = Math.floor(Math.sqrt(n));
//     const blocks = [];
    
//     for (let i=0; i < n; i += blockSize) {
//         const end = Math.min(i + blockSize, n);
//         let maxInBlock = -1;
//         for (let j=i; j < end; ++j) {
//             if (baskets[j] > maxInBlock) {
//                 maxInBlock = baskets[j];
//             }
//         }
//         blocks.push(maxInBlock);
//     }

//     let count = 0;
//     for (const fruit of fruits) {
//         let basketFound = false;
//         for (let i=0; i < blocks.length; ++i) {
//             if (blocks[i] >= fruit) {
//                 const start = i * blockSize;
//                 const end = Math.min(start + blockSize, n);

//                 for (let j=start; j < end; ++j) {
//                     if (baskets[i] >= fruit) {
//                         baskets[i] = -1;
//                         basketFound = true;

//                         let newMax = -1;
//                         for (let k=start; k <  end; ++k) {
//                             if (baskets[j] > newMax) {
//                                 newMax = baskets[j];
//                             }
//                             console.log("count4")
//                         }
//                         blocks[i] = newMax;
//                         break;
//                     }
//                     console.log("count3")
//                 }
//             }
//             if (basketFound) {
//                 break;
//             }
//             console.log("count2")
//         }
//         if (!basketFound) {
//             count++;
//         }
//         console.log("count1")
//     }

//     return count;
// };