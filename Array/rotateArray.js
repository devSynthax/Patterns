/**
 * Question: Rotate array by K steps
 * Example:
 * Input: [1, 2, 3, 4, 5], K = 2
 * Output: [4, 5, 1, 2, 3]
 */

function rotateArray(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 2;
const result = rotateArray(arr, k);
console.log(result); // Output: [4, 5, 1, 2, 3]


// same problem using extra space
const rotateArray2 = (arr, k) => {
    let result = [];
    let n = arr.length;
    if (n === 0) return arr;

    k = k % n;

    // add last k elements
    for (let i = n - k; i < n; i++) {
        result.push(arr[i]);
    }

    // add first n-k elements
    for (let i = 0; i < n - k; i++) {
        result.push(arr[i]);
    }

    return result;
}   

// Example usage:
const arr2 = [1, 2, 3, 4, 5];
const k2 = 2;
const result2 = rotateArray2(arr2, k2);
console.log(result2); // Output: [4, 5, 1, 2, 3]