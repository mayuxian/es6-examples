//DLR: Data LeftChild RightChild

/**
 * 前序查找-递归法
 */
function DLR_Recursion(root) {
  const res = []
  const dfs = (root) => {
    if (!root) return []
    res.push(root.val);
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root);
  return res;
}

/**
 * 前序查找-遍历法
 */
function DLR_Traversal() {
  const res = []
  const stack = [root]
  while (stack.length) {
    let p = stack.pop();
    res.push(p.val);
    if (p.right) stack.push(p.right)
    if (p.left) stack.push(p.left)
  }
  return res;
}

/**
 * 中序遍历-递归法
 */
function LDR_Recursion() {
  const res = []
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  }
  dfs(root)
  return res;
}

/**
 * 中序遍历-遍历法
 */
function LDR_Traversal() {
  const res = [];
  const stack = [];
  let p = root;
  while (p && stack.length) {
    if (p) {
      stack.push(p);
      p = p.left
    } else {
      p = stack.pop();
      res.push(p.val);
      p = p.right
    }
  }
  return res;
}

/**
 * 后序遍历-递归法
 */
function LRD_Recursion() {

}

/**
 * 后序遍历-遍历法
 */
function LDR_Traversal() {

}