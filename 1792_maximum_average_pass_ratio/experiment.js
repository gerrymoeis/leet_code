/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    let sum = 0;
    let index = 0;
    let max = 0;
    for (let i=0; i < classes.length; ++i) {
        const [pass, total] = classes[i];
        sum += pass/total;
        const extra = (pass+extraStudents)/(total+extraStudents);
        console.log(extra, pass/total);
        if (extra - pass/total > max) {
            index = i;
            max = extra;
            console.log(max);
        }
    }
    console.log(sum, index, max, classes[index]);
    const [pass, total] = classes[index];
    return (sum - (pass/total) + max) / classes.length;
};