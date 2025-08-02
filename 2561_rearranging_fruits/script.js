/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    const costs = new Map();
    const b1_counts = new Map();
    let min_fruit = Infinity;

    for (let i = 0; i < basket1.length; ++i) {
        const f1 = basket1[i];
        const f2 = basket2[i];
        costs.set(f1, (costs.get(f1) || 0) + 1);
        costs.set(f2, (costs.get(f2) || 0) + 1);
        b1_counts.set(f1, (b1_counts.get(f1) || 0) + 1);
        min_fruit = Math.min(min_fruit, f1, f2);
    }

    for (const [fruit, count] of costs) {
        if (count % 2) return -1;
    }

    const displaced_fruits = [];
    for (const [fruit, total_count] of costs) {
        const target_count = total_count / 2;
        const current_b1_count = b1_counts.get(fruit) || 0;
        const diff = Math.abs(current_b1_count - target_count);

        for (let i = 0; i < diff; i++) {
            displaced_fruits.push(fruit);
        }
    }

    displaced_fruits.sort((a, b) => a - b);
    
    let total_cost = 0;
    const swapsToPerform = displaced_fruits.length / 2;

    for (let i = 0; i < swapsToPerform; i++) {
        const direct_swap_cost = displaced_fruits[i];
        const double_swap_cost = 2 * min_fruit;
        total_cost += Math.min(direct_swap_cost, double_swap_cost);
    }

    return total_cost;
};

const tests = [
    [[4,2,2,2], [1,4,1,2]],
    [[1,2,3,1], [2,3,3,3]],
    [[1,2,3,1], [3,3,3,3]],
    [[2,3,4,1], [3,2,5,1]]
]

for (const test of tests) {
    console.log(minCost(...test));
}

// Experiments
// var minCost = function(basket1, basket2) {
//     let uniques = new Set();
//     for (let i=0; i < basket1.length; ++i) {
//         uniques.add(basket1[i]).add(basket2[i]);
//     }
//     if (uniques.size >= basket1.length) return -1
    
//     let cost = 0;
//     for (let i=0; i < basket1.length; ++i) {
//         // if ()
//     }
    
//     return uniques
// };

// var minCost = function(basket1, basket2) {
//     let costs = new Map();
//     for (let i=0; i < basket1.length; ++i) {
//         costs.set(basket1[i], (costs.get(basket1[i]) || 0) + 1);
//         costs.set(basket2[i], (costs.get(basket2[i]) || 0) + 1);
//         // if ((costs.get(basket1[i]) % 2) !== 0 || (costs.get(basket2[i]) % 2) !== 0) {
//         //   costs.set("odd", true);
//         // } else {
//         //   costs.set("odd", false);
//         // }
//     }
//     for (const cost of costs) {
//       if (cost[1] % 2) return -1;
//     }
//     // if (costs.get("odd")) return -1;
//     return costs;
// };

// var minCost = function(basket1, basket2) {
//     let costs = new Map();
//     for (let i=0; i < basket1.length; ++i) {
//         costs.set(basket1[i], (costs.get(basket1[i]) || 0) + 1);
//         costs.set(basket2[i], (costs.get(basket2[i]) || 0) + 1);
//     }
//     for (const cost of costs) {
//         if (cost[1] % 2) return -1;
//     }
    
//     let b1_counts = new Map();
//     for (const fruit of basket1) {
//         b1_counts.set(fruit, (b1_counts.get(fruit) || 0) + 1);
//     }
    
//     let to_swap_b1 = [];
//     let to_swap_b2 = [];
    
//     for (const [fruit, total_count] of costs) {
//         const target_count = total_count / 2;
//         const current_b1_count = b1_counts.get(fruit) || 0;
        
//         if (current_b1_count > target_count) {
//             const surplus_count = current_b1_count - target_count;
//             for (let i = 0; i < surplus_count; i++) {
//                 to_swap_b1.push(fruit);
//             }
//         }
//         else if (current_b1_count < target_count) {
//             const surplus_count = target_count - current_b1_count;
//             for (let i = 0; i < surplus_count; i++) {
//                 to_swap_b2.push(fruit);
//             }
//         }
//     }
    
//     // for (let i=0; i < to_swap_b1.length; ++i) {
//     //     [basket1[i], basket2[i]]
//     //  }
    
//     console.log("Fruits to swap from basket1:", to_swap_b1);
//     console.log("Fruits to swap from basket2:", to_swap_b2);
//     return 0;
// };