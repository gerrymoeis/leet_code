/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let earlyLand = earlyWater = Infinity;
    let land = water = 0;
    for (let i=0; i < landStartTime.length; ++i) {
        time = landStartTime[i] + landDuration[i] + waterDuration;
        land += landStartTime[i] + landDuration[i];
        earlyLand = Math.min(earlyLand, land);
        land = 0;
    }
    for (let i=0; i < waterStartTime.length; ++i) {
        water += waterStartTime[i] + waterDuration[i];
        earlyWater = Math.min(earlyWater, water);
        water = 0;
    }
    console.log(earlyLand, earlyWater);
};



// Experiment
// var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
//     let earlyLand = earlyWater = Infinity;
//     let land = water = 0;
//     for (let i=0; i < landStartTime.length; ++i) {
//         land += landStartTime[i] + landDuration[i];
//         earlyLand = Math.min(earlyLand, land);
//         land = 0;
//     }
//     for (let i=0; i < waterStartTime.length; ++i) {
//         water += waterStartTime[i] + waterDuration[i];
//         earlyWater = Math.min(earlyWater, water);
//         water = 0;
//     }
//     console.log(earlyLand, earlyWater);
// };