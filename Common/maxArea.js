/**
 * Question: Container With Most Water
 * Example:
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */


function maxArea(height) {
  let left = 0, right = height.length - 1;
  let max = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// Example usage:
const result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(result); // Output: 49