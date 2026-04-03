/**
 * Question: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 * Example:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 */

function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
}

// Example usage:
const strs = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs);
console.log(result); // Output: "fl"