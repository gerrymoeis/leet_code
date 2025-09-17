class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foodToCuisine = new Map();
        this.foodToRating = new Map();
        this.cuisineFoods = new Map();

        for (let i = 0; i < foods.length; i++) {
            this.foodToCuisine.set(foods[i], cuisines[i]);
            this.foodToRating.set(foods[i], ratings[i]);
        }

        for (let i = 0; i < foods.length; i++) {
            let cuisine = cuisines[i];
            if (!this.cuisineFoods.has(cuisine)) {
                this.cuisineFoods.set(cuisine, new Set());
            }
            this.cuisineFoods.get(cuisine).add(foods[i]);
        }
    }

    changeRating(food, newRating) {
        let cuisine = this.foodToCuisine.get(food);
        this.cuisineFoods.get(cuisine).delete(food);
        this.foodToRating.set(food, newRating);
        this.cuisineFoods.get(cuisine).add(food);
    }

    highestRated(cuisine) {
        let foods = Array.from(this.cuisineFoods.get(cuisine));
        foods.sort((a, b) => {
            let r1 = this.foodToRating.get(a);
            let r2 = this.foodToRating.get(b);
            if (r1 !== r2) return r2 - r1;
            return a.localeCompare(b);
        });
        return foods[0];
    }
}