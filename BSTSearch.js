// Depth-first search (DFS)

// In a DFS you start from a given node (usually the root) and 
// traverse as far as you can down. When you reach a node, which 
// has no children to visit or all nodes on its path have been 
// visited, you start backtracking.

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    // for the purpose of this example, algorithm will traverse the nodes
    // adding them to a values array

    // time complexity is O(n) since each node needs to be visited
    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    bfs(tree, values=[]) {
        // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const queue = new Queue()
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); // remove from the queue
            values.push(node.value); // add that value from the queue to the array

            if (node.left) {
                queue.enqueue(node.left); // add left child to queue
            }

            if (node.right) {
                queue.enqueue(node.right); //  add right child to queue
            }
        }
        return values;
    }
}

