/**
 * Question: write a function that takes an array of numbers and returns an array where each element at index i is the product of all the numbers in the original array except the one at i.
 * Example:
 * Input: [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 */

// time complexity: O(n)
// space complexity: O(n) (output array, excluding the output array it's O(1))

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    let leftProduct = 1;

    // Calculate left products
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    // Calculate right products and final output
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return output;
}

// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]