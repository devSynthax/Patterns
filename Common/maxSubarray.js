/**
 * Question: Maximum subarray sum (Kadane’s Algorithm)
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6 (The contiguous subarray [4,-1,2,1] has the largest sum = 6)
 */

function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to extend or start new
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update global max
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArray(nums);
console.log(maxSum); // Output: 6