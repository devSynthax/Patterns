/**
 * Question: implement a queue using two stacks
 * Example:
 * Input: ["MyQueue", "push", "push", "peek", "pop", "empty"], [[], [1], [2], [], [], []]
 */

class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  // Enqueue operation
  enqueue(value) {
    this.inStack.push(value);
  }

  // Dequeue operation
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.pop();
  }

  // Peek front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack[this.outStack.length - 1];
  }

  // Check if queue is empty
  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  // Get size
  size() {
    return this.inStack.length + this.outStack.length;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.peek());    // 2
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false