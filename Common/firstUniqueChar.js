/**
 * Question: First non-repeating character in a string
 * Example:
 * Input: "leetcode"
 * Output: 'l' (The first non-repeating character is 'l')
 */

function firstNonRepeatingCharacter(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null; // Return null if there is no non-repeating character
}

// Example usage:
const input = "leetcode";
const result = firstNonRepeatingCharacter(input);
console.log(result); // Output: 'l'