/**
 * Question Check if a string is a palindrome
 * Example:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true (The string is a palindrome when ignoring non-alphanumeric characters and case)
 */

function isPalindrome(s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanedString.length - 1;
    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
const input = "A man, a plan a canal: Panama";
const result = isPalindrome(input);
console.log(result); // Output: true
