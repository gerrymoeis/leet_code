var getRow = function(rowIndex) {
    let nums = [[1]]
    for (let i=1; i<rowIndex+1; i++) {
      let rows = [1, 1]
      for (let j=0; j < i-1; j++) {
        rows.splice(1, 0, nums[0][j] + nums[0][j+1])
      }
      nums.splice(0,1,rows)
    }
    return nums[0]
};

let rowIndex = 7
console.log(getRow(rowIndex))