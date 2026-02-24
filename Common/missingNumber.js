/**
 * Question: Find the missing number in an array of integers from 1 to n
 * Example:
 * Input: [1, 2, 4, 5, 6], n = 6
 * Output: 3 (The missing number is 3)
 */

function findMissingNumber(nums, n) {
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of the given array
    return expectedSum - actualSum; // The difference is the missing number
}

// Example usage:
const nums = [1, 2, 4, 5, 6];
const n = 6;
const missingNumber = findMissingNumber(nums, n);
console.log(missingNumber); // Output: 3
