/**
 * Question: missing number in an array.
 * Example:
 * Input: [3, 0, 1]
 * Output: 2
 * Input: [0, 1]
 * Output: 2
 * Note: The function should return the missing number in the array. The array contains n distinct numbers taken from the range 0 to n, so there is exactly one number missing.
 */

const missingNumber = (arr) => {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
console.log(missingNumber([3, 0, 1])) // Output: 2
console.log(missingNumber([0, 1])) // Output: 2
console.log(missingNumber([0, 1, 2, 4, 5])) // Output: 3