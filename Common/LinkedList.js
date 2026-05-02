/**
 * Q1:- Singly Linked List Implementation in JavaScript
 */

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add new node at beginning
    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    // Add new node at end
    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Remove from beginning
    shift() {
        if (!this.head) return null;

        const removed = this.head;
        this.head = this.head.next;

        if (this.length === 1) {
            this.tail = null;
        }

        this.length--;
        return removed.data;
    }

    // Remove from end
    pop() {
        if (!this.head) return null;

        let removed;

        if (this.length === 1) {
            removed = this.head.data;
            this.head = this.tail = null;
        } else {
            let current = this.head;

            while (current.next !== this.tail) {
                current = current.next;
            }

            removed = this.tail.data;
            current.next = null;
            this.tail = current;
        }

        this.length--;
        return removed;
    }

    // Display all nodes
    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }

        return this.log(result + "null");
    }

    // Get value by index
    findByIndex(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return this.log(current.data);
    }

    // ✅ Insert at index (implemented)
    insertAt(index, value) {
        if (index < 0 || index > this.length) return;

        if (index === 0) {
            this.unshift(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }

    // ✅ Delete at index (implemented)
    deleteAt(index) {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) {
            return this.shift();
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const removed = current.next.data;
        current.next = current.next.next;
        this.length--;
        return removed;
    }

    // ✅ Reverse list (implemented)
    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // Custom logger (optional utility)
    log(message, level = "LOG") {
        const time = new Date().toLocaleString();

        const formatted = `[${time}] [${level}] ${message instanceof Error ? message.message : message
            }`;

        switch (level.toUpperCase()) {
            case "INFO":
                console.info(formatted);
                break;
            case "WARN":
                console.warn(formatted);
                break;
            case "ERROR":
                console.error(formatted);
                break;
            default:
                console.log(formatted);
        }
    }
}

// Usage
const list = new LinkedList();

list.unshift(2);
list.unshift(9);
list.push(11);
list.push(15);
list.print();            // 9 -> 2 -> 11 -> 15 -> null

// list.findByIndex(2); // 11
list.insertAt(2, 10);
list.deleteAt(0);
list.reverse();
list.print();