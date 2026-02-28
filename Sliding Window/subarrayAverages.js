/**
 * Question: Average of all subarrays of size K
 * Example 1: Input: arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5
 * Output: [2.2, 2.8, 2.8, 3.6]
 */

const subarrayAverages = (arr, k) => {
    if(k > arr.length) return null;

    let result = []
    let windowSum = 0;
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    result.push(windowSum / k);
    
    for(let i = k; i < arr.length; i++) {
        // windowSum += arr[i] - arr[i - k];
        windowSum -= arr[i - k];
        windowSum += arr[i];
        result.push(windowSum / k);
    }
    return result;
}

// Example
console.log(subarrayAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
// [2.2, 2.8, 2.4, 3.6, 2.8]