class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }
    end() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    display() {
        return this.items;
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.display());
console.log(stack.size())
console.log(stack.peek())
console.log(stack.end())

















