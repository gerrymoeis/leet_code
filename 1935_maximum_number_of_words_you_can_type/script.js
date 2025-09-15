/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ");
    let count = text.length;
    for (const s of text) {
        for (const l of brokenLetters) {
            if (s.includes(l)) {
                count--;
                break;
            }
        }
    }
    return count;
};


/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const broken = new Set(brokenLetters);
    let count = 0;
    for (const word of text.split(" ")) {
        let valid = true;
        for (const ch of word) {
            if (broken.has(ch)) {
                valid = false;
                break;
            }
        }
        if (valid) count++;
    }
    return count;
};