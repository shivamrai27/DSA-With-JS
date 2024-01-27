let queue = [];

let maxSize = 5;
let currentSize = queue.length;

function enqueue(val) {
    if (currentSize >= maxSize) {
        console.log("queue is full");
    } else {
        queue[currentSize] = val;
        currentSize++;
    }
}

function dequeue() {
    if (currentSize < 0) {
        console.log("queue is already empty");
    } else {
        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        currentSize--;
        queue.length = currentSize;
    }
}

function display() {
    console.log(queue);
}

enqueue(4);
enqueue(6);
enqueue(69);
display();
dequeue();
dequeue();
dequeue();
dequeue();
display();