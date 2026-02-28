/**
 * Question: First negative number in every window of size K
 * Example 1: Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
 * Output: [ -1, -1, -7, -15, -15, 0 ]
 */


const firstNegativeInWindow = (arr, k) => {
    if(k > arr.length) return null;
    
    let negative = [];
    let result = [];
    for(let i = 0; i < k; i++) {
        if(arr[i] < 0) negative.push(arr[i]);
    }
    
    for(let i = k; i <= arr.length; i++) {
        result.push(negative.length ? negative[0] : 0);
        if(arr[i - k] < 0) negative.shift();
        if(arr[i] < 0) negative.push(arr[i]);
    }
    
    return result;
}

