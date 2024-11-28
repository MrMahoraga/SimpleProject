class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
let list = new SinglyLinkedList(); -
    list.append(5)
list.append(10)
list.print()