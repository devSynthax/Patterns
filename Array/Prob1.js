/**
 * Question: Find the maximum/minimum element in an array
 * Example:
 * Input: [3, 1, 4, 1, 5, 9]
 * Output: Maximum: 9, Minimum: 1
 */


function findMaxMin(arr) {
    if (arr.length === 0) return null;

    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }   
    }
    return { max, min };
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9];
const result = findMaxMin(arr);
console.log(`Maximum: ${result.max}, Minimum: ${result.min}`);
