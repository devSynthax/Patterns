/**
 * Question: Longest substring without repeating characters
 * Example:
 * Input: "abcabcbb"
 * Output: 3 (The longest substring without repeating characters is "abc" with length 3)
 */

function longestUniqueSubstring(s) {
  let set = new Set();  // store unique characters in current window
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]); // remove from start until no duplicates
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Examples
console.log(longestUniqueSubstring("abcabcbb")); // 3 -> "abc"
console.log(longestUniqueSubstring("bbbbb"));    // 1 -> "b"
console.log(longestUniqueSubstring("pwwkew"));   // 3 -> "wke"

// Example usage:
const input = "abcabcbb";
// const result = lengthOfLongestSubstring(input);
// console.log(result); // Output: 3