/**
 * Question: Rotate array by K steps
 * Example:
 * Input: [1, 2, 3, 4, 5], K = 2
 * Output: [4, 5, 1, 2, 3]
 */

function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n; // handle k > n

  // Helper to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the whole array
  reverse(0, n - 1);

  // Step 2: Reverse first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining n-k elements
  reverse(k, n - 1);

  return arr;
}

// Examples
console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArray([-1,-100,3,99], 2));  // [3,99,-1,-100]