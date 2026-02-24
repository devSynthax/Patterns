/**
 * Question: Implement a stack using an array.
 * Example:
 * Input: ["Stack", "push", "push", "top", "pop", "empty"]
 * Output: [null, null, null, 2, 2, false] (The stack operations are performed as follows: push(1), push(2), top() returns 2, pop() returns 2, empty() returns false)
 */

class Stack {
  constructor() {
    this.items = [];
  }

  // Push element onto stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return top element without removing
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size of stack
  size() {
    return this.items.length;
  }

  // Clear stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false