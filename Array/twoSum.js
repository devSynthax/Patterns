/**
 * Question: Two Sum: Given an array of integers and a target integer, return the indices of the two numbers that add up to the target.
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Note: The function should return the indices of the two numbers in the form of an array. If no such pair exists, it should return null or an appropriate message.
 */

const twoSum = (nums, target) => {
    let numMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return null; // or "No pair found"
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)) // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)) // Output: null
console.log(twoSum([3, 2, 4], 6)) // Output: [1, 2]