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