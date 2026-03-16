/**
 * Question: Find the maximum/minimum element in an array
 * Example:
 * Input: [3, 1, 4, 1, 5, 9]
 * Output: Maximum: 9, Minimum: 1
 */


const minMax = (arr) => {
    let min = Infinity;
    let max = -Infinity;
    
    for(let item of arr) {
        if(item > max) {
            max = item;
        }
        
        if(item < min) {
            min = item;
        }
    }
    
    return [min, max];
}

// Example usage:
const arr = [3, 1, 4, 1, 5, 9];
const result = minMax(arr);
console.log(`Maximum: ${result[1]}, Minimum: ${result[0]}`);
