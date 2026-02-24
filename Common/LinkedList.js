// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // ============================
    // 1️⃣ Insertion Operations
    // ============================

    // Insert at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at a specific position (0-based index)
    insertAtPosition(data, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let prev = null;
        let count = 0;

        while (count < position) {
            prev = current;
            current = current.next;
            count++;
        }

        prev.next = newNode;
        newNode.next = current;
        this.size++;
    }

    // ============================
    // 2️⃣ Searching Operation
    // ============================
    search(data) {
        let current = this.head;
        let position = 0;

        while (current) {
            if (current.data === data) {
                return position;
            }
            current = current.next;
            position++;
        }

        return -1; // not found
    }

    // ============================
    // 3️⃣ Deletion Operations
    // ============================

    // Delete from beginning
    deleteFromBeginning() {
        if (!this.head) return null;
        const deletedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return deletedNode.data;
    }

    // Delete from end
    deleteFromEnd() {
        if (!this.head) return null;

        let current = this.head;
        let prev = null;

        if (!current.next) {
            // only one node
            this.head = null;
            this.size--;
            return current.data;
        }

        while (current.next) {
            prev = current;
            current = current.next;
        }

        prev.next = null;
        this.size--;
        return current.data;
    }

    // Delete at a specific position
    deleteAtPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return null;
        }

        if (position === 0) return this.deleteFromBeginning();

        let current = this.head;
        let prev = null;
        let count = 0;

        while (count < position) {
            prev = current;
            current = current.next;
            count++;
        }

        prev.next = current.next;
        this.size--;
        return current.data;
    }

    // Delete by value (first occurrence)
    deleteByValue(data) {
        if (!this.head) return null;

        if (this.head.data === data) {
            return this.deleteFromBeginning();
        }

        let current = this.head;
        let prev = null;

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (!current) return null; // not found

        prev.next = current.next;
        this.size--;
        return current.data;
    }

    // ============================
    // 4️⃣ Update Operation
    // ============================

    // Update first occurrence of a value
    update(oldData, newData) {
        let current = this.head;

        while (current) {
            if (current.data === oldData) {
                current.data = newData;
                return true; // updated
            }
            current = current.next;
        }

        return false; // not found
    }

    // ============================
    // Utility: Print the Linked List
    // ============================
    printList() {
        let current = this.head;
        let listStr = "";
        while (current) {
            listStr += current.data + " -> ";
            current = current.next;
        }
        listStr += "null";
        console.log(listStr);
    }
}

// Example usage:
const list = new LinkedList();

// Insertions
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtBeginning(5);
list.insertAtPosition(15, 2); // Insert 15 at index 2
list.printList(); // 5 -> 10 -> 15 -> 20 -> null

// Searching
console.log(list.search(15)); // 2
console.log(list.search(100)); // -1

// Updates
list.update(15, 17);
list.printList(); // 5 -> 10 -> 17 -> 20 -> null

// Deletions
list.deleteFromBeginning();
list.printList(); // 10 -> 17 -> 20 -> null
list.deleteFromEnd();
list.printList(); // 10 -> 17 -> null
list.deleteAtPosition(1);
list.printList(); // 10 -> null
list.deleteByValue(10);
list.printList(); // null
