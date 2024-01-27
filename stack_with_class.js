class stack {
    item = [];
    currentSize;
    maxSize;
    result;
    constructor(size) {
        this.maxSize = size;
        this.currentSize = this.item.length;
    }

    push(newVal) {
        if (this.currentSize >= this.maxSize) {
            this.result = "Stack is full";
        } else {
            this.item[this.currentSize] = newVal;
            this.currentSize++;
            this.result = this.item
        }
    }

    pop() {
        if (this.currentSize > 0) {
            this.currentSize--
            this.item.length = this.currentSize;
        } else {
            this.result = "stack is already empty";
        }

    }

    display() {
        console.warn(this.result);
    }
}

st = new stack(5);
// st.push(1);
// st.push(2);
// st.push(3);
st.pop();
st.display();