https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/solutions/7001350/javascript-0ms-100-on-time-on-space-simp-7tcw


# **Simple JavaScript Solution with a Set | O(n) Time**

![alt text](https://assets.leetcode.com/users/images/9f756e3e-6fbb-43dc-a6a6-5e036e3d82cc_1753415422.649702.jpeg)

Hi everyone, this is my first time posting a solution! I wanted to share my approach that passed the tests, and I hope my thought process can be helpful to others.

### **Intuition**

When I first read the problem, the phrase "delete any number of elements" was the key. It made me realize that this wasn't strictly a subarray problem. If you can delete any element, any *subsequence* of unique numbers can be chosen.

This simplified the goal: **find the maximum sum of a subsequence containing unique elements.**

To get the largest possible sum, my logic was:
1.  Sum up all the unique **positive** numbers.
2.  Ignore unique negative numbers, as they would decrease the sum.
3.  Handle the edge case: If all unique numbers are negative (e.g., `[-1, -2, -3]`), the best we can do is take the single largest number (`-1`).

### **Approach**

Based on this idea, my plan was:

1.  Use a `Set` to easily keep track of numbers I've already processed to ensure uniqueness.
2.  Use a `total` variable to accumulate the sum of unique, non-negative numbers.
3.  Use a `max` variable to track the highest sum found so far. It's important to initialize this with a value from the array itself to handle cases where the answer might be negative.
4.  Loop through the array. If a number is new (not in the `Set`), I check if it's positive. If it is, I add it to `total`. At each step, I update `max` to ensure it always holds the highest value seen, whether that's the running `total` or a single large number.

While my code ran fast, I admit the condition `if (max + nums[i] < max)` is a bit confusing. It was just my way of checking if `nums[i]` was negative. A simple `if (nums[i] < 0)` would have been much more readable!

### **Complexity**

*   **Time complexity: O(n)**
    *   We only need to loop through the input array once.
*   **Space complexity: O(n)**
    *   In the worst-case scenario, the `Set` may need to store all `n` elements if they are unique.

### **Code**

Here is my code with some added comments to explain the steps.

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let setNums = new Set();
    let total = 0;
    // Initialize max with a value from the array to handle all-negative cases.
    let max = nums[nums.length-1];

    for (let i = nums.length - 1; i >= 0; i--) {
      // Process each number only if it's unique.
      if (!setNums.has(nums[i])) {
        setNums.add(nums[i]);

        // This is my check for a negative number. A clearer way is `if (nums[i] < 0)`.
        if (max + nums[i] < max) {
          // If negative, we don't add it to total, but it could be our answer
          // if all other numbers are smaller.
          max = Math.max(max, nums[i]);
        } else {
          // If positive, add it to our running total.
          total += nums[i];
          // The new total might be our new maximum sum.
          max = Math.max(max, total);
        }
      }
    }
    return max;
};
```