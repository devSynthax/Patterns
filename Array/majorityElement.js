/**
 * Finds the majority element in an array.
 * @param {number[]} nums - The input array.
 * @return {number} - The majority element.
 */
function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Examples
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// Explanation:
/**
 * Optimal Solution: Boyer-Moore Voting Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Steps:
 * 1. Initialize candidate and count variables.
 * 2. Iterate through the array.
 * 3. If count is 0, set the current element as the candidate.
 * 4. If the current element is the candidate, increment count; otherwise, decrement it.
 * 5. Return the candidate.
 */