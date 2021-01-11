const Queue = require('./queue-class');

class BinarySearchTree {
    constructor(
        key = null,
        value = null,
        parent = null
    ) {
        this.key = key;
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    };

    // Add items to tree
    add(key, value) {
        if(this.key === null) {
            this.key = key;
            this.value = value;
        } else if(key < this.key) {
            if(this.left === null) {
                this.left = new BinarySearchTree(key, value, this);
            } else {
                this.left.add(key, value);
            }
        } else {
            if(this.right === null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                this.right.add(key, value);
            }
        }
    };

    // Find item in tree
    find(key) {
        if(this.key === key) {
            return this.value;
        } else if(key < this.key && this.left) {
            return this.left.find(key);
        } else if(key > this.key && this.right) {
            return this.right.find(key);
        } else {
            throw new Error(`Key Error`);
        }
    };

    // Delete an item from the tree
    remove(key) {
        if(this.key === key) {
            if(this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            } else if(this.left) {
                this._replaceWith(this.left);
            } else if(this.right) {
                this._replaceWith(this.right);
            } else {
                this._replaceWith(null);
            }
        } else if(key < this.key && this.left) {
            this.left.remove(key);
        } else if(key > this.key && this.right) {
            this.right.remove(key);
        } else {
            throw new Error('Key Error');
        }
    }

    // Depth first search
    dfs(order, values=[]) {
        switch(order) {
            case 'preorder':
                values.push(this.value);
                if(this.left) {
                    values = this.left.dfs(order, values);
                }
                if(this.right) {
                    values = this.right.dfs(order, values);
                }
                break;
            case 'postorder':
                if(this.left) {
                    values = this.left.dfs(order, values);
                }
                if(this.right) {
                    values = this.left.dfs(order, values);
                }
                break;
            default:
                if(this.left) {
                    values = this.left.dfs(order, values);
                }
                values.push(this.value);
                if(this.right) {
                    values = this.right.dfs(order, values);
                }
                break;
        }
        return values;
    };

    // Breadth first search
    bfs(values = []) {
        const queue = new Queue();
        const root = this;
        queue.enqueue(root);

        while(queue.first !== null) {
            const node = queue.dequeue();
            values.push(node.value);
            if(node.left) {
                queue.enqueue(node.left);
            }
            if(node.right) {
                queue.enqueue(node.right);
            }
        }
        return values;
    };

    // Helper function to replace nodes
    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node;
            } else if(this == this.parent.right) {
                this.parent.right = node;
            }

            if(node) {
                node.parent = this.parent;
            }
        } else {
            if(node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    };

    // Helper function to find minimun value in right tree
    _findMin() {
        if(!this.right) {
            return this;
        }
        return this.right._findMin();
    }
}

module.exports = BinarySearchTree;