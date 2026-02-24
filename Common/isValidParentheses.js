/**
 * Question: check valid parentheses
 * Example:
 * Input: "()[]{}"
 * Output: true (The string is valid because every opening bracket has a corresponding closing bracket in the correct order)
 */

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If it's an opening bracket, push the expected closing bracket
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, it must match the top of the stack
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // Stack should be empty if all brackets are matched
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true