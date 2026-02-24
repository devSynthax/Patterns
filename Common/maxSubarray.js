/**
 * Question: Maximum subarray sum (Kadane’s Algorithm)
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6 (The contiguous subarray [4,-1,2,1] has the largest sum = 6)
 */

function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal;
}
// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArray(nums);
console.log(maxSum); // Output: 6