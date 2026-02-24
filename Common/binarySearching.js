/**
 * Question: binary searching
 * Example:
 * Input: [1, 2, 3, 4, 5], target = 3
 * Output: 2 (The index of the target number is 2)
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Target found, return index
        }
        if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const target = 3;
const index = binarySearch(arr, target);
console.log(index); // Output: 2