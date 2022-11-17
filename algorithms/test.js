
function quickSort(arr, left, right) {
    if (left >= right) return;
    const swap = (arr, i, j) => {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
    }
    let i = left, j = right;
    let val = arr[left]
    while (i < j) {
        while (i < j && arr[j] > val) {
            --j;
        }
        while (i < j && arr[i] <= val) {
            ++i;
        }
        if (i < j) {
            swap(arr, i, j)
            // let temp = arr[i];
            // arr[i] = arr[j];
            // arr[j] = temp;
        }
    }
    swap(arr,left,i);
    // arr[left] = arr[i];
    // arr[i] = val;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
}

function dfs_find_loop(root, value) {
    const dfs = (node) => {
        if (!node) return;
        if (value === node.val) return node;
        res.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root);
    return null;
}
function bfs_while(root) {
    if (!root) return;
    const res = [], allNodes = [root];
    let levelRes = [], levelNodes = []
    while (allNodes.length) {
        const node = allNodes.pop();
        levelRes.push(node.val);
        if (node.left) {
            levelNodes.push(node.left)
        }
        if (node.right) {
            levelNodes.push(node.right)
        }
        if (allNodes.length == 0) {
            allNodes = levelNodes;
            levelNodes = [];
            res.push(levelRes);
            levelRes = []
        }
    }
}

function dfs_loop(root) {
    if (!root) return [];
    const res = [];
    const dfs = (node) => {
        if (!node) return;
        res.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return res;
}

function bfs(root) {
    if (!root) return []
    let queue = [root], node = null;
    let levelRes = [], childQueue = [], res = [];
    while (queue.length) {
        node = queue.pop();
        levelRes.push(node.val)
        if (node.left) {
            childQueue.push(node.left)
        }
        if (node.right) {
            childQueue.push(node.right)
        }
        if (!queue.length) {
            queue = childQueue;
            childQueue = []
            res.push(levelRes);
            levelRes = []
        }
    }
    return res;
}


