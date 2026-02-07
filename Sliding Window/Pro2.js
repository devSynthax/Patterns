/**
 *  Question: Given an array of integers and a number k, find the maximum sum of a subarray of size k.
 *  Example 1: Input: arr = [2, 1, 5, 1, 3, 2], k = 3
 *  Output: 9
 *  Explanation: The subarray with the maximum sum is [5, 1, 3].
 */

var maxSumSubarray = function(arr, k) {
    if (k > arr.length) return null;

    let currentSum = 0;

    // Sum of first window
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    let maxSum = currentSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i];
        currentSum -= arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
