/**
 * An intriguing and balanced solution using Square Root Decomposition.
 * This approach is easier to code than a segment tree and faster than O(n^2).
 *
 * Time Complexity: O(n * sqrt(n))
 * Space Complexity: O(n)
 *
 * @param {number[]} fruits An array of fruit quantities.
 * @param {number[]} baskets An array of basket capacities.
 * @returns {number} The count of unplaced fruits.
 */
function unplacedFruitsSqrt(fruits, baskets) {
    const n = baskets.length;
    if (n === 0) {
        return fruits.length;
    }

    // 1. SETUP: Decompose the baskets array into blocks
    const blockSize = Math.floor(Math.sqrt(n));
    const blockMaxes = [];
    for (let i = 0; i < n; i += blockSize) {
        const end = Math.min(i + blockSize, n);
        let maxInBlock = -1;
        for (let j = i; j < end; j++) {
            if (baskets[j] > maxInBlock) {
                maxInBlock = baskets[j];
            }
        }
        blockMaxes.push(maxInBlock);
    }

    let unplacedCount = 0;

    // Process each fruit
    for (const fruit of fruits) {
        let basketFound = false;
        
        // 2. SEARCH: Find the correct basket
        for (let blockIndex = 0; blockIndex < blockMaxes.length; blockIndex++) {
            // Phase A: Scan the blocks
            if (blockMaxes[blockIndex] >= fruit) {
                // This block has a potential basket. Scan inside it.
                const start = blockIndex * blockSize;
                const end = Math.min(start + blockSize, n);

                // Phase B: Scan inside the block
                for (let i = start; i < end; i++) {
                    if (baskets[i] >= fruit) {
                        // We found our leftmost available basket!
                        baskets[i] = -1; // Mark as used
                        basketFound = true;
                        
                        // 3. UPDATE: Recalculate the max for this modified block
                        let newMax = -1;
                        for (let j = start; j < end; j++) {
                            if (baskets[j] > newMax) {
                                newMax = baskets[j];
                            }
                        }
                        blockMaxes[blockIndex] = newMax;
                        
                        break; // Exit the inner loop (basket for this fruit found)
                    }
                }
            }
            if (basketFound) {
                break; // Exit the outer loop (move to the next fruit)
            }
        }

        if (!basketFound) {
            unplacedCount++;
        }
    }

    return unplacedCount;
}


// Final run with the complex test case
const fruits_complex = [788, 327, 679, 355, 163, 436, 482, 831, 190, 286, 349, 567, 698, 332, 299, 312, 133, 205, 827, 606, 216, 935, 122, 670, 476, 294, 180, 651, 121, 95, 760, 38, 775, 897, 782, 184, 231, 399, 833, 846, 191, 256, 554, 174, 518, 834, 774, 733, 6, 920, 33, 579, 88, 112, 348, 721, 922, 107, 543, 750, 869, 339, 995, 55, 536, 632, 276, 931, 865, 346, 304, 163, 82, 538, 290, 344, 658, 987, 592, 626, 238, 258];
const baskets_complex = [207, 14, 713, 632, 130, 490, 751, 269, 153, 12, 152, 814, 617, 773, 849, 230, 239, 972, 503, 56, 619, 532, 389, 632, 536, 606, 758, 818, 649, 765, 208, 992, 872, 464, 526, 150, 568, 167, 9, 574, 97, 987, 529, 204, 681, 143, 338, 585, 866, 551, 810, 828, 576, 822, 355, 879, 660, 758, 90, 230, 35, 223, 467, 925, 273, 643, 224, 887, 546, 859, 730, 311, 719, 972, 994, 967, 560, 96, 33, 762, 113, 83];

console.log(`Output for Complex Case (Sqrt Solution): ${unplacedFruitsSqrt(fruits_complex, baskets_complex)}`);