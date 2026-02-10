/**
 * Question: Find duplicate elements in an array
 * Example:
 * Input: [1, 2, 3, 4, 2, 5, 1]
 * Output: [1, 2]
 * Note: The output should contain only the duplicate elements, without any repetitions.
 */

function findDuplicates(arr) {
    let result = [];
    if(arr.length === 0) return [];
    for(let i = 0; i < arr.length; i++) {
        const index = Math.abs(arr[i]) - 1;
        if(arr[index] < 0) {
            result.push(index + 1);
        }else {
            arr[index] = -arr[index];
        }
    } 
    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 2, 5, 1];
const duplicates = findDuplicates(arr);
console.log(duplicates); // Output: [1, 2]