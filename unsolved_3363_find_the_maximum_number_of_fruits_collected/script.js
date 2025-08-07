/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function(fruits) {
    let child1 = [0, 0];
    for (let i=0; i < fruits.length; ++i) {
        console.log(fruits[child1[0]][child1[1]]);
        
        let child1Move;
        let index = 0;
        if (i !== fruits.length-1) {
            child1Move = [
                fruits[child1[0]+1][child1[1]+1],
                fruits[child1[0]+1][child1[1]],
                fruits[child1[0]][child1[1]+1],
            ]
            max = child1Move[0];
            for (let j=1; j < child1Move.length; ++j) {
                if (child1Move[j] > max) {
                    max = child1Move[j];
                    index = j;
                }
            }
        }
        
        console.log("index", index, child1Move);
        
        if (index === 0) {
            child1[0]++;
            child1[1]++;
        } else if (index === 1) {
            child1[0]++;
        } else if (index === 2) {
            child1[1]++;
        }
        
        console.log(fruits[i]);
    }
};

const tests = [
    [[1,2,3,4],[5,6,8,7],[9,10,11,12],[13,14,15,16]],
    [[1,1],[1,1]],
    [[1,2,3,4,90,100],[5,6,8,7,70,80],[9,10,11,12,50,60],[13,14,15,16,30,40], [17,18,19,20,10,20], [21,22,23,24,90,100]]
]

for (const test of tests) {
    console.log(maxCollectedFruits(test));
}



// Experiments
var maxCollectedFruits = function(fruits) {
    console.log(fruits);
    let total = 0;
    const child1 = [0, 0];
    const child2 = [0, fruits.length-1];
    const child3 = [fruits.length-1, 0];
    for (let i=0; i < fruits.length; ++i) {
        total += fruits[child1[0]][child1[1]];
        fruits[child1[0]][child1[1]] = 0;
        
        total += fruits[child2[0]][child2[1]];
        fruits[child2[0]][child2[1]] = 0;
        
        total += fruits[child3[0]][child3[1]];
        fruits[child3[0]][child3[1]] = 0;
        
        
        
        
        let child1Move, child2Move, child3Move;
        let index1 = index2 = index3 = 0;
        if (i !== fruits.length-1) {
            child1Move = [
                fruits[child1[0]+1][child1[1]+1],
                fruits[child1[0]+1][child1[1]],
                fruits[child1[0]][child1[1]+1],
            ]
            
            child2Move = [
                fruits[child2[0]+1][child2[1]-1],
                fruits[child2[0]+1][child2[1]],
                fruits[child2[0]+1][child2[1]+1],
            ]

            child3Move = [
                fruits[child3[0]-1]?.[child3[1]+1] ?? 0,
                fruits[child3[0]]?.[child3[1]+1] ?? 0,
                fruits[child3[0]+1]?.[child3[1]+1] ?? 0,
            ]
            
            max1 = child1Move[0];
            for (let j=1; j < child1Move.length; ++j) {
                if (child1Move[j] > max1) {
                    max1 = child1Move[j];
                    index1 = j;
                }
            }

            max2 = child2Move[0];
            for (let j=1; j < child2Move.length; ++j) {
                if (child2Move[j] > max2) {
                    max2 = child2Move[j];
                    index2 = j;
                }
            }

            max3 = child3Move[0];
            for (let j=1; j < child3Move.length; ++j) {
                if (child3Move[j] > max3) {
                    max3 = child3Move[j];
                    index3 = j;
                }
            }
        }
        
        if (index1 === 0) {
            child1[0]++;
            child1[1]++;
        } else if (index1 === 1) {
            child1[0]++;
        } else if (index1 === 2) {
            child1[1]++;
        }

        if (index2 === 0) {
            child2[0]++;
            child2[1]--;
        } else if (index2 === 1) {
            child2[0]++;
        } else if (index2 === 2) {
            child2[0]++;
            child2[1]++;
        }

        if (index3 === 0) {
            child3[0]--;
            child3[1]++;
        } else if (index3 === 1) {
            child3[1]++;
        } else if (index3 === 2) {
            child3[0]++;
            child3[1]++;
        }

        // console.log(child1, i)
        
        // console.log(fruits[i]);
        
        
    }
    
    for (const fruit of fruits) {
        console.log(fruit);
    }
    return total;
};













var maxCollectedFruits = function(fruits) {
    console.log(fruits);
    let total = 0;
    const child1 = [0, 0];
    const child2 = [0, fruits.length-1];
    const child3 = [fruits.length-1, 0];
    for (let i=0; i < fruits.length; ++i) {
        total += fruits[child1[0]][child1[1]];
        fruits[child1[0]][child1[1]] = 0;
        
        let child1Move, child2Move, child3Move;
        let index1 = index2 = index3 = 0;
        if (i !== fruits.length-1) {
            child1Move = [
                fruits[child1[0]+1][child1[1]+1],
                fruits[child1[0]+1][child1[1]],
                fruits[child1[0]][child1[1]+1],
            ]
            
            max1 = child1Move[0];
            for (let j=1; j < child1Move.length; ++j) {
                if (child1Move[j] > max1) {
                    max1 = child1Move[j];
                    index1 = j;
                }
            }
        }
        
        if (index1 === 0) {
            child1[0]++;
            child1[1]++;
        } else if (index1 === 1) {
            child1[0]++;
        } else if (index1 === 2) {
            child1[1]++;
        }
    }

    for (let i=0; i < fruits.length; ++i) {
        total += fruits[child2[0]][child2[1]];
        fruits[child2[0]][child2[1]] = 0;
        
        let child1Move, child2Move, child3Move;
        let index1 = index2 = index3 = 0;

        if (i !== fruits.length-1) {
            child2Move = [
                fruits[child2[0]+1][child2[1]-1],
                fruits[child2[0]+1][child2[1]],
                fruits[child2[0]+1][child2[1]+1],
            ]

            max2 = child2Move[0];
            for (let j=1; j < child2Move.length; ++j) {
                if (child2Move[j] > max2) {
                    max2 = child2Move[j];
                    index2 = j;
                }
            }
        }

        if (index2 === 0) {
            child2[0]++;
            child2[1]--;
        } else if (index2 === 1) {
            child2[0]++;
        } else if (index2 === 2) {
            child2[0]++;
            child2[1]++;
        }
    }

    for (let i=0; i < fruits.length; ++i) {
        total += fruits[child3[0]][child3[1]];
        fruits[child3[0]][child3[1]] = 0;
        
        let child1Move, child2Move, child3Move;
        let index1 = index2 = index3 = 0;

        if (i !== fruits.length-1) {
            child3Move = [
                fruits[child3[0]-1]?.[child3[1]+1] ?? 0,
                fruits[child3[0]]?.[child3[1]+1] ?? 0,
                fruits[child3[0]+1]?.[child3[1]+1] ?? 0,
            ]

            max3 = child3Move[0];
            for (let j=1; j < child3Move.length; ++j) {
                if (child3Move[j] > max3) {
                    max3 = child3Move[j];
                    index3 = j;
                }
            }
        }

        if (index3 === 0) {
            child3[0]--;
            child3[1]++;
        } else if (index3 === 1) {
            child3[1]++;
        } else if (index3 === 2) {
            child3[0]++;
            child3[1]++;
        }
    }

    

    for (const fruit of fruits) {
        console.log(fruit);
    }
    return total;
};