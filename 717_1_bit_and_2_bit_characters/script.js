/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = bits => {
    let count = 0;
    let i = bits.length-2;
    while (bits[i]) {
        count++;
        i--;
    }
    return !(count % 2);
};

// False
/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => !bits[bits.length-2];