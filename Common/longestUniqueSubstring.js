/**
 * Question: Longest substring without repeating characters
 * Example:
 * Input: "abcabcbb"
 * Output: 3 (The longest substring without repeating characters is "abc" with length 3)
 */

function lengthOfLongestSubstring(s) {
    let map = new Map();  // Stores character -> last index
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // If character is already seen and inside current window
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        map.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(result); // Output: 3