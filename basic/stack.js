class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index) {
        if (index === this.arr.length - 1) {
            return this.arr.pop();
        }

        let result = this.arr.splice(index, 1);
        return result;
    }

    empty() {
        return this.arr.length === 0;
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    bottom() {
        return this.arr[0];
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);

let popValue = s.pop(1);

console.log(s);
console.log(popValue);
console.log(s.top());
console.log(s.bottom());