
function bfs(root) {
  if (!root) return []
  const res = []
  const queue = [root]
  const temp = null;
  const levelres = []
  const tempqueue = []
  while (queue.length > 0) {
    temp = queue.shift();
    levelres.push(temp.val);
    if (temp.left) {
      tempqueue.push(temp.left)
    }
    if (temp.right) {
      tempqueue.push(temp.right)
    }
    if (queue.length) {
      queue = tempqueue.slice(0);
      tempqueue = [];
      res.push(levelres);
      levelres = []
    }
  }
  return res;
}