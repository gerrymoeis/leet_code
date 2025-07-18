// A standard, correct Min-Priority Queue.
class HeapPriorityQueue {
    constructor() {
        this._heap = [];
    }
    size() {
        return this._heap.length;
    }
    peek() {
        return this._heap[0];
    }
    enqueue(value) {
        this._heap.push(value);
        this._siftUp(this.size() - 1);
    }
    dequeue() {
        if (this.size() === 0) return undefined;
        this._swap(0, this.size() - 1);
        const value = this._heap.pop();
        this._siftDown(0);
        return value;
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp(index) {
        if (index === 0) return;
        const parentIndex = Math.floor((index - 1) / 2);
        if (this._heap[index] < this._heap[parentIndex]) {
            this._swap(index, parentIndex);
            this._siftUp(parentIndex);
        }
    }
    _siftDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestChildIndex = index;
        if (leftChildIndex < this.size() && this._heap[leftChildIndex] < this._heap[smallestChildIndex]) {
            smallestChildIndex = leftChildIndex;
        }
        if (rightChildIndex < this.size() && this._heap[rightChildIndex] < this._heap[smallestChildIndex]) {
            smallestChildIndex = rightChildIndex;
        }
        if (smallestChildIndex !== index) {
            this._swap(index, smallestChildIndex);
            this._siftDown(smallestChildIndex);
        }
    }
}


var minimumDifference = function(nums) {
    const n = nums.length / 3;

    // =================================================================
    // PHASE 1: Calculate leftMinSums
    // We need a Max-PQ. We simulate it with a Min-PQ by storing negative numbers.
    // =================================================================
    const leftMinSums = [];
    const maxPq = new HeapPriorityQueue();
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (maxPq.size() < n) {
            maxPq.enqueue(-num); // Store as negative
            currentSum += num;
        } else {
            // maxPq.peek() is the smallest negative, so -maxPq.peek() is the largest positive.
            if (num < -maxPq.peek()) {
                currentSum -= -maxPq.dequeue(); // Remove largest positive
                maxPq.enqueue(-num);            // Add new smaller as negative
                currentSum += num;
            }
        }
        if (maxPq.size() === n) {
            leftMinSums[i] = currentSum;
        }
    }

    // =================================================================
    // PHASE 2: Calculate rightMaxSums with a standard Min-PQ
    // =================================================================
    const rightMaxSums = [];
    const minPq = new HeapPriorityQueue();
    currentSum = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        if (minPq.size() < n) {
            minPq.enqueue(num);
            currentSum += num;
        } else {
            // minPq.peek() is the smallest of our n largest numbers.
            if (num > minPq.peek()) {
                currentSum -= minPq.dequeue(); // Remove smallest
                minPq.enqueue(num);            // Add bigger
                currentSum += num;
            }
        }
        if (minPq.size() === n) {
            rightMaxSums[i] = currentSum;
        }
    }

    // =================================================================
    // PHASE 3: Combine the results
    // =================================================================
    let minDiff = Infinity;
    for (let i = n - 1; i < 2 * n; i++) {
        minDiff = Math.min(minDiff, leftMinSums[i] - rightMaxSums[i + 1]);
    }

    return minDiff;
};




// class PriorityQueue {
//   constructor(comparator = (a, b) => a - b) {
//     this._heap = [];
//     this._comparator = comparator;
//   }
//   size() { return this._heap.length; }
//   peek() { return this._heap[0]; }
//   enqueue(value) {
//     this._heap.push(value);
//     this._siftUp();
//   }
//   dequeue() {
//     const poppedValue = this.peek();
//     const bottom = this.size() - 1;
//     if (bottom > 0) {
//       this._swap(0, bottom);
//     }
//     this._heap.pop();
//     this._siftDown();
//     return poppedValue;
//   }
//   _siftUp() { /* ... magic logic ... */ }
//   _siftDown() { /* ... magic logic ... */ }
//   _swap(i, j) { /* ... magic logic ... */ }
// }


// var minimumDifference = function(nums) {
//     const n = nums.length / 3;

//     // =================================================================
//     // PHASE 1: Calculate leftMinSums with a MAX-PQ
//     // =================================================================
//     const leftMinSums = [];
//     // Trick: To make a Max-PQ from a Min-PQ, we compare `b - a` instead of `a - b`.
//     const maxPq = new PriorityQueue((a, b) => b - a);
//     let currentSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (maxPq.size() < n) {
//             maxPq.enqueue(nums[i]);
//             currentSum += nums[i];
//         } else {
//             if (nums[i] < maxPq.peek()) {
//                 currentSum -= maxPq.dequeue(); // Remove biggest
//                 maxPq.enqueue(nums[i]);      // Add smaller
//                 currentSum += nums[i];
//             }
//         }
//         if (maxPq.size() === n) {
//             leftMinSums[i] = currentSum;
//         }
//     }

//     // =================================================================
//     // PHASE 2: Calculate rightMaxSums with a MIN-PQ
//     // =================================================================
//     const rightMaxSums = [];
//     const minPq = new PriorityQueue(); // Default is a Min-PQ
//     currentSum = 0;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (minPq.size() < n) {
//             minPq.enqueue(nums[i]);
//             currentSum += nums[i];
//         } else {
//             if (nums[i] > minPq.peek()) {
//                 currentSum -= minPq.dequeue(); // Remove smallest
//                 minPq.enqueue(nums[i]);      // Add bigger
//                 currentSum += nums[i];
//             }
//         }
//         if (minPq.size() === n) {
//             rightMaxSums[i] = currentSum;
//         }
//     }

//     // =================================================================
//     // PHASE 3: Combine the results (Perfectly the same as before)
//     // =================================================================
//     let minDiff = Infinity;
//     for (let i = n - 1; i < 2 * n; i++) {
//         minDiff = Math.min(minDiff, leftMinSums[i] - rightMaxSums[i + 1]);
//     }

//     return minDiff;
// };






// class HeapPriorityQueue {
//   constructor(comparator = (a, b) => a - b) {
//     this._heap = [];
//     this._comparator = comparator;
//   }
//   size() {
//     return this._heap.length;
//   }
//   peek() {
//     return this._heap[0];
//   }
//   enqueue(value) {
//     this._heap.push(value);
//     this._siftUp();
//   }
//   dequeue() {
//     const poppedValue = this.peek();
//     const bottom = this.size() - 1;
//     if (bottom > 0) {
//       this._swap(0, bottom);
//     }
//     this._heap.pop();
//     this._siftDown();
//     return poppedValue;
//   }
//   _parent(i) {
//     return ((i + 1) >>> 1) - 1;
//   }
//   _left(i) {
//     return (i << 1) + 1;
//   }
//   _right(i) {
//     return (i + 1) << 1;
//   }
//   _greater(i, j) {
//     return this._comparator(this._heap[i], this._heap[j]) > 0;
//   }
//   _swap(i, j) {
//     [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
//   }
//   _siftUp() {
//     let node = this.size() - 1;
//     while (node > 0 && this._greater(node, this._parent(node))) {
//       this._swap(node, this._parent(node));
//       node = this._parent(node);
//     }
//   }
//   _siftDown() {
//     let node = 0;
//     while (
//       (this._left(node) < this.size() && this._greater(this._left(node), node)) ||
//       (this._right(node) < this.size() && this._greater(this._right(node), node))
//     ) {
//       let maxChild = (this._right(node) < this.size() && this._greater(this._right(node), this._left(node))) ? this._right(node) : this._left(node);
//       this._swap(node, maxChild);
//       node = maxChild;
//     }
//   }
// }


// var minimumDifference = function(nums) {
//     const n = nums.length / 3;

//     // The rest of the algorithm is IDENTICAL, but now it uses the working PQ.
    
//     const leftMinSums = [];
//     const maxPq = new HeapPriorityQueue((a, b) => b - a);
//     let currentSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (maxPq.size() < n) {
//             maxPq.enqueue(nums[i]);
//             currentSum += nums[i];
//         } else {
//             if (nums[i] <= maxPq.peek()) {
//                 currentSum -= maxPq.dequeue();
//                 maxPq.enqueue(nums[i]);
//                 currentSum += nums[i];
//             }
//         }
//         if (maxPq.size() === n) {
//             leftMinSums[i] = currentSum;
//         }
//     }

//     const rightMaxSums = [];
//     const minPq = new HeapPriorityQueue((a, b) => a - b);
//     currentSum = 0;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (minPq.size() < n) {
//             minPq.enqueue(nums[i]);
//             currentSum += nums[i];
//         } else {
//             if (nums[i] >= minPq.peek()) {
//                 currentSum -= minPq.dequeue();
//                 minPq.enqueue(nums[i]);
//                 currentSum += nums[i];
//             }
//         }
//         if (minPq.size() === n) {
//             rightMaxSums[i] = currentSum;
//         }
//     }

//     let minDiff = Infinity;
//     for (let i = n - 1; i < 2 * n; i++) {
//         minDiff = Math.min(minDiff, leftMinSums[i] - rightMaxSums[i + 1]);
//     }

//     return minDiff;
// };