/**
 * Question: find second largest element in an array.
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: 4
 * Input: [5, 4, 3, 2, 1]
 * Output: 4
 * Note: The function should return the second largest element in the array. If the array has less than two elements, it should return null or an appropriate message.
 */

const secondLargestElement = (arr) => {
    if (!arr || arr.length < 2) return null;
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for(let item of arr) {
        if(item > max) {
            secondMax = max;
            max = item
        }
        
        if(item > secondMax && item < max) {
            secondMax = item;
        }
    }
    
    return secondMax === -Infinity ? null : secondMax;
}


// Example usage:
console.log(secondLargestElement([1, 2, 3, 4, 5])) // Output: 4
console.log(secondLargestElement([5, 4, 3, 2, 1])) // Output: 4
console.log(secondLargestElement([1])) // Output: null
console.log(secondLargestElement([])) // Output: null
