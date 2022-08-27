
function bfs(root) {
  if (!root) return []
  let res = [],queue = [root];
  let node = null,levelres = [],childQueue = []
  while (queue.length) {
    node = queue.shift();
    levelres.push(node.val);
    if (node.left) {
      childQueue.push(node.left)
    }
    if (node.right) {
      childQueue.push(node.right)
    }
    if (!queue.length) {
      queue = childQueue;
      childQueue = [];
      res.push(levelres);
      levelres = []
    }
  }
  return res;
}