/**
 * Question: Move zeros to end
 * Example:
 * Input: [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0] (All zeros are moved to the end while maintaining the order of non-zero elements)
 */

function moveZeroes(nums) {
    let lastNonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result); // Output: [1, 3, 12, 0, 0]