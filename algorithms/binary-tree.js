//https://www.cnblogs.com/du001011/p/11229170.html

//二叉树递归遍历
function treeTraveralRecurve(treeNode) {
  if (!treeNode) return
  // console.log(treeNode) //先序遍历
  treeTraveral(treeNode?.leftChild)
  // console.log(treeNode) //中序遍历
  treeTraveral(treeNode?.rightChild)
  // console.log(treeNode) //后序遍历
}

function treeTraveralStack(treeNode) {
  let stack = [treeNode]
  while (!treeNode || stack.length) {
    while (treeNode) {
      // console.log(treeNode)//先序遍历
      stack.push(treeNode)
    }
    if (stack.length) {
      treeNode = stack.pop()
      // console.log(treeNode)//中序遍历
      treeNode = treeNode.rightChild
    }
  }
}
//后序查找
function postTreeTraveralStack(treeNode) {
  let stack = [treeNode]
  let lastVisit = treeNode;   //标记每次遍历最后一次访问的节点
  while (!treeNode || stack.length) {
    while (treeNode) {
      stack.push(treeNode)
    }
    if (stack.length) {
      treeNode = stack.pop()
      /**
                 * 这块就是判断treeNode是否有右孩子，
                 * 如果没有输出treeNode.data，让lastVisit指向treeNode，并让treeNode为空
                 * 如果有右孩子，将当前节点继续入栈，treeNode指向它的右孩子,继续重复循环
                 */
      if (treeNode.rightChild == null || treeNode.rightChild == lastVisit) {
        // console.log(treeNode)//后序遍历
        lastVisit = treeNode;
        treeNode = null;
      } else {
        stack.push(treeNode);
        treeNode = treeNode.rightChild;
      }
    }
  }
}

//层级遍历
// levelOrder(TreeNode root){
//   LinkedList<TreeNode> queue = new LinkedList<>();
//   queue.add(root);
//   while(!queue.isEmpty()){
//       root = queue.pop();
//       System.out.print(root.data+" ");
//       if(root.leftChild!=null) queue.add(root.leftChild);
//       if(root.rightChild!=null) queue.add(root.rightChild);
//   }
// }
