/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let i = 0, j = 0;
    const n = version1.length, m = version2.length;

    while (i < n || j < m) {
        let num1 = 0, num2 = 0;

        while (i < n && version1[i] !== '.') {
            num1 = num1 * 10 + (version1[i].charCodeAt(0) - '0'.charCodeAt(0));
            i++;
        }

        while (j < m && version2[j] !== '.') {
            num2 = num2 * 10 + (version2[j].charCodeAt(0) - '0'.charCodeAt(0));
            j++;
        }

        if (num1 > num2) return 1;
        if (num1 < num2) return -1;

        if (i < n && version1[i] === '.') i++;
        if (j < m && version2[j] === '.') j++;
    }
    return 0;
};