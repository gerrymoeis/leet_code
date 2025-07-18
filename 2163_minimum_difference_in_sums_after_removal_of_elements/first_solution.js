/**
 * @param {number[]} nums
 * @return {number}
 */
/*
calc min[i]: minimum sum of n subsequence of elements in nums[...i]
i from [n-1 to 2n-1].
use heap.
calc max[i]: maximum sum of n subsequence of elements in nums[i..]
i from [n to 2n].
use heap and calc reversely, from 2n to n.
compare each min[i]-max[i+1].
*/
// build heapq with JS

var minimumDifference = function(nums) {
    const shiftdown = (arr, i, len) => {
        while (i*2 + 2 < len && (arr[i] > arr[i*2 + 1] || arr[i] > arr[i*2 + 2])) {
            let j = i*2 + 1;
            if (arr[j] > arr[j + 1]) {
                j++;
            }
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
            i = j;
        }
        if (i*2 + 2 == len) { // only 1 child
            if (arr[i] > arr[i*2 + 1]) {
                const tmp = arr[i*2 + 1];
                arr[i*2 + 1] = arr[i];
                arr[i] = tmp;
            }
            return;
        }
    }
    const heapify = (arr, len) => {
        for (let i = Math.floor((len - 2)/2); i >= 0; i--) {
            shiftdown(arr, i, len);
        }
        return arr;
    };
    const heapreplace = (arr, len, val) => {
        const top = arr[0];
        arr[0] = val;
        shiftdown(arr, 0, len);
        return top;
    };
    const n = nums.length / 3;
    
    const maxPQ = heapify(nums.slice(0, n).map(x => -x), n);
    const min = Array(n + 1);
    min[0] = maxPQ.reduce((acc, v) => acc - v, 0);
    for (let i = 1; i <= n; i++) {
        if (nums[n - 1 + i] < -maxPQ[0]) {
            const tmp = -heapreplace(maxPQ, n, -nums[n - 1 + i]);
            min[i] = min[i - 1] + nums[n - 1 + i] - tmp;
        } else {
            min[i] = min[i - 1];
        }
    }

    const minPQ = heapify(nums.slice(2*n), n);
    const max = Array(n + 1).fill(0);
    max[n] = minPQ.reduce((acc, v) => acc + v, 0);
    for (let i = 1; i <= n; i++) {
        if (nums[2*n - i] > minPQ[0]) {
            const tmp = heapreplace(minPQ, n, nums[2*n - i]);
            max[n - i] = max[n - i + 1] - tmp + nums[2*n - i];
        } else {
            max[n - i] = max[n - i + 1];
        }
    }

    let ans = Number.MAX_VALUE;
    for (let i = 0; i <= n; i++) {
        ans = Math.min(ans, min[i] - max[i]);
    }
    return ans;
};