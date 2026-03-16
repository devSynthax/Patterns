/**
 * Q: Remove duplicates from an array.
 * Example:
 * Input: [1, 2, 2, 3, 4, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 * Note: The function should return a new array containing only the unique elements from the original array, preserving the order of their first occurrence.
 * Input: ['a', 'b', 'a', 'c', 'b', 'a']
 * Output: ['a', 'b', 'c']
 */

function removeDuplicates(arr) {
    if(!arr.length) return [];
    let uniqueElements = [];
    let seen = new Set();
    for(let item of arr) {
        if(!seen.has(item)) {
            uniqueElements.push(item);
            seen.add(item);
        }
    }
    return uniqueElements;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b', 'a'])) // Output: ['a', 'b', 'c']
console.log(removeDuplicates([])) // Output: []