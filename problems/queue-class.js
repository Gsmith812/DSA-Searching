class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    };

    // Add item to queue
    enqueue(value) {
        // Create node
        const node = new _Node(value);

        // If first item doesn't exists make this node first
        if(this.first === null) {
            this.first = node;
        }

        // If last item already exists point the last to this node
        if(this.last) {
            this.last.next = node;
        }

        // Make the new node the last item in queue
        this.last = node;
    };

    // Remove item from queue
    dequeue() {
        // If queue is empty
        if(this.first === null) {
            return `Queue is empty`;
        }

        // Set node to dequeue
        const node = this.first;
        // Set the 2nd item in the queue to the first
        this.first = this.first.next;

        // If the node is the last item in queue
        if(node === this.last) {
            // Set last to null
            this.last = null;
        }

        return node.value;
    }
}

module.exports = Queue;