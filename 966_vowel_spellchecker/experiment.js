/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
function vowel_mask(w) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const v = w.toLowerCase().split("");
    for (let i=0; i < v.length; ++i) {
        if (vowels.has(v[i])) v[i] = "-";
    }
    return v.join("");
}
var spellchecker = function(wordlist, queries) {
    const set_wordlist = new Set();
    const map_lower = new Map();
    const map_vowel = new Map();
    for (const w of wordlist) {
        if (!map_lower.has(w.toLowerCase())) {
            map_lower.set(w.toLowerCase(), w);
            map_vowel.set(vowel_mask(w), w);
        } else set_wordlist.add(w);
    }

    const answers = [];
    for (let query of queries) {
        if (set_wordlist.has(query)) {
            answers.push(query);
            continue;
        };
        query = query.toLowerCase();
        const vowel_query = vowel_mask(query);
        if (map_lower.has(query)) answers.push(map_lower.get(query));
        else if (map_vowel.has(vowel_query)) answers.push(map_vowel.get(vowel_query));
        else answers.push("");
    }
    return answers;
};