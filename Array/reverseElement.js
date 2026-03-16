/**
 * Question: Reverse an array in place.
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 * Note: The function should modify the original array and not return a new array.
 */

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Swap elements at left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr; // Return the modified array (optional)
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
reverseArray(arr);
console.log(arr); // Output: [5, 4, 3, 2, 1]