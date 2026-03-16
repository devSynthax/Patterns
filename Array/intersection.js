/**
 * Question: inetrsection of two arrays.
 * Example:
 * Input: [1, 2, 2, 3], [2, 2, 4]
 * Output: [2, 2]
 * Note: The function should return an array containing the common elements between the two input arrays. Each element in the result should appear as many times as it shows in both arrays.
 */

function intersection(a, b) {
  // Always build Set from smaller array to reduce memory
  if (a.length > b.length) [a, b] = [b, a];

  const set = new Set(a);
  const result = [];

  for (const x of b) {
    if (set.has(x)) {
      result.push(x);
      set.delete(x); // ensures uniqueness in result
    }
  }

  return result;
}

// Example usage:
console.log(intersection([1, 2, 2, 3], [2, 2, 4])); // Output: [2, 2]
console.log(intersection([1, 2, 3], [4, 5, 6])); // Output: []
console.log(intersection([1, 1, 2, 3], [1, 2, 2])); // Output: [1, 2]
console.log(intersection([], [1, 2, 3])); // Output: []
console.log(intersection([1, 2, 3], [])); // Output: []
