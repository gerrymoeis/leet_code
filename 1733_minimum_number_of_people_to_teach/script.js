/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    languages = languages.map(l => new Set(l));
    dontSpeak = new Set();
    for (let [u,v] of friendships) {
        u = u-1, v = v-1;
        let canSpeak = false;
        for (const lang of languages[u]) {
            if (languages[v].has(lang)) {
                canSpeak = true;
                break;
            }
        }
        if (!canSpeak) {
            dontSpeak.add(u);
            dontSpeak.add(v);
        }
    }
    let langCount = new Array(n+1).fill(0);
	for (const f of dontSpeak) {
        for (const l of languages[f]) {
            langCount[l] += 1;
        }
    }
	return dontSpeak.size === 0 ? 0 : dontSpeak.size - Math.max(...langCount);
};

// Experiments
/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    const langs = new Map();
    let count = 0;
    for (let [u, v] of friendships) {
        
    }

    for (let i=0; i < languages.length; ++i) {
        for (let j=0; j < languages[i].length; ++j) {
            langs.set(languages[i][j], (langs.get(languages[i][j]) ?? 0) + 1);
            count = Math.max(count, langs.get(languages[i][j]));
        }
    }
    return languages.length - count;
};