/**
 *  Question: Given an array of integers and a number k, find the maximum sum of a subarray of size k.
 *  Example 1: Input: arr = [2, 1, 5, 1, 3, 2], k = 3
 *  Output: 9
 *  Explanation: The subarray with the maximum sum is [5, 1, 3].
 */

const maxSumSubarray = (arr, k) => {
    if(k > arr.length) return null;
    
    let windowSum = 0;
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let maxSum = windowSum;
    for(let i = k; i < arr.length; i++) {
        windowSum -= arr[i - k];
        windowSum += arr[i];
        maxSum = Math.max(windowSum,maxSum);
    }
    
    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9

