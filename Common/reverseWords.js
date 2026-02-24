/**
 * Question: Reverse the order of words in a string.
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 */

function reverseWords(s) {
    const words = s.trim().split(/\s+/);
    let result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }

    return result.join(' ');
}

// Example usage:
const input = "the sky is blue";
const output = reverseWords(input);
console.log(output); // Output: "blue is sky the"

