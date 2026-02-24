/**
 * Question: find the duplicate number in an array
 * Example:
 * Input: [1, 3, 4, 2, 2]
 * Output: 2 (The duplicate number is 2)
 */

function findDuplicate(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return num; // Found the duplicate
        }
        numSet.add(num);
    }
    return -1; // No duplicate found (though the problem guarantees one)
}

// Example usage:
const nums = [1, 3, 4, 2, 2];
const duplicate = findDuplicate(nums);
console.log(duplicate); // Output: 2