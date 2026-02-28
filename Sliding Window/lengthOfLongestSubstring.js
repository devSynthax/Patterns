/**
 * Question: Longest substring without repeating characters
 * Example: Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

function lengthOfLongestSubstring(s) {
    let map = new Map();   // char -> last index
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If duplicate found inside current window, move left pointer
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        // Update last seen index
        map.set(char, right);

        // Update max length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example usage:
const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(result); // Output: 3 (The longest substring without repeating characters is "abc")