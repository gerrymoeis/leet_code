/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    for (account of accounts) {
      max = Math.max(max, account.reduce((n,t) => n+t,0))
    }
    return max
};

const tests = [
    [[1,2,3],[3,2,1]],
    [[1,5],[7,3],[3,5]],
    [[2,8,7],[7,1,3],[1,9,5]],
    [[20],[5,4],[2,3,10]],
    [[1000]]
]

for (let test of tests) {
    console.log(maximumWealth(test))
}