/**
 * Question: Move all zeros to the end
 * Example:
 * Input: [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

// Example usage:
const arr = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(arr);
console.log(result); // Output: [1, 3, 12, 0, 0]

