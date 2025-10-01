/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    while (numBottles >= numExchange) {
        const newBottles = Math.floor(numBottles / numExchange)
        total += newBottles;
        numBottles = newBottles + (numBottles % numExchange);
    }
    return total;
};



// Experiment
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = 0;
    let bottles = numBottles;
    while (numBottles > numExchange) {
        total += numBottles;
        numBottles = Math.floor(numBottles / numExchange);
        bottles
        console.log(numBottles);
    }
    return total;
};