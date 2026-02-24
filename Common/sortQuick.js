/**
 * Question: Quick sort / Merge sort explanation
 * Example:
 * Input: [3, 6, 8, 10, 1, 2, 1]
 * Output: [1, 1, 2, 3, 6, 8, 10] (The array is sorted in non-decreasing order)
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }
    const pivot = arr[Math.floor(arr.length / 2)]; // Choosing the middle element as pivot
    const left = arr.filter(x => x < pivot); // Elements less than pivot
    const right = arr.filter(x => x > pivot); // Elements greater than pivot
    const middle = arr.filter(x => x === pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)]; // Recursively sort left and right, then concatenate
}

// Example usage:
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 6, 8, 10]