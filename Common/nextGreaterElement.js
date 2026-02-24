/**
 * Question: Next greater element
 * Example:
 * Input: [4, 5, 2, 10, 8]
 * Output: [5, 10, 10, -1, -1] (The next greater element for each element is 5, 10, 10, and -1 respectively)
 */

function nextGreaterElement(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = []; // will store indices

    for (let i = 0; i < n; i++) {
        // If current element is greater than stack top element
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

// Example
console.log(nextGreaterElement([4, 5, 2, 10, 8]));
// Output: [5, 10, 10, -1, -1]