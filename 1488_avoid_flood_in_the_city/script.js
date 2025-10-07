/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const last = new Map();
    const q = [];
    const res = [];
    for (let i = 0; i < rains.length; i++){
        const lake = rains[i];
        if (lake !== 0){
            if (last.has(lake)){
                let found = false;
                for (let j = 0; j < q.length; j++){
                    if (q[j] > last.get(lake)) {
                        res[q[j]] = lake;
                        q.splice(j, 1);
                        found = true;
                        break;
                    }
                }
                if (!found)
                return [];
            }
            res.push(-1);
            last.set(lake, i);
        } else {
            res.push(1);
            q.push(i);
        }
    }
    return res;
};