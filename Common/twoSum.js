/**
 * Question: Two Sum problem
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] (Because nums[0] + nums[1] = 2 + 7 = 9)
 */

function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}
// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]