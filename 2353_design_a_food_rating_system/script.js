/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foodToCuisine = new Map();
    this.foodRatings = new Map();
    this.cuisineToFoods = new Map(); // cuisine -> heap

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const cuisine = cuisines[i];
        const rating = ratings[i];

        this.foodToCuisine.set(food, cuisine);
        this.foodRatings.set(food, rating);

        if (!this.cuisineToFoods.has(cuisine)) {
            this.cuisineToFoods.set(cuisine, new MaxxHeap());
        }
        this.cuisineToFoods.get(cuisine).push([rating, food]);
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    this.foodRatings.set(food, newRating);
    const cuisine = this.foodToCuisine.get(food);
    this.cuisineToFoods.get(cuisine).push([newRating, food]); // lazy insert
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    const heap = this.cuisineToFoods.get(cuisine);
    while (heap.data.length > 0) {
        const [rating, food] = heap.peek();
        if (this.foodRatings.get(food) === rating) {
            return food;
        }
        heap.pop(); // discard outdated entry
    }
    return "";
};

class MaxxHeap {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
        this._siftUp(this.data.length - 1);
    }
    peek() {
        return this.data[0];
    }
    pop() {
        const top = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = end;
            this._siftDown(0);
        }
        return top;
    }
    _siftUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this._compare(this.data[idx], this.data[parent]) < 0) break;
            [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
            idx = parent;
        }
    }
    _siftDown(idx) {
        const length = this.data.length;
        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let largest = idx;
            if (left < length && this._compare(this.data[left], this.data[largest]) > 0) largest = left;
            if (right < length && this._compare(this.data[right], this.data[largest]) > 0) largest = right;
            if (largest === idx) break;
            [this.data[idx], this.data[largest]] = [this.data[largest], this.data[idx]];
            idx = largest;
        }
    }
    _compare(a, b) {
        // a and b are [rating, food] — higher rating first, then lexicographically smaller food
        if (a[0] !== b[0]) return a[0] - b[0];
        return b[1] < a[1] ? -1 : (b[1] > a[1] ? 1 : 0);
    }
}
/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */