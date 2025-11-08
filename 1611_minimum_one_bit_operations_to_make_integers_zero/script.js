/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    const s = n.toString(2);

    let b =  s[0];

    for (let i = 1; i < s.length; i++)
        if (b[i - 1] === s[i])
            b += '0';
        else
            b += '1';

    return parseInt(b, 2);
};