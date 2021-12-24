//https://blog.csdn.net/qq_36734002/article/details/116853249

//-----------------------DFS--------------------------------
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//二叉树的前序遍历：头结点->左节点->右节点
//递归法
function preorderTraversal(root){
  var res = []
  function dfs(root){
      if (!root){
          return []
      }
      res.push(root.val)
      dfs(root.left)
      dfs(root.right)
  }
  dfs(root)
  return res
}
//遍历法
function preorderTraversal(root){
  var p = null
  var stack = [root]
  var res = []
  while(stack.length>0){
      p = stack.pop()
      res.push(p.val)
      if (p.right!==null){
          stack.push(p.right)
      }
      if (p.left!==null){
          stack.push(p.left)
      }
  }
  return res
}

//二叉树的中序遍历：左节点->头结点->右节点
//递归法
function inorderTraversal(root){
  var res = []
  function dfs(root){
      if (!root){
          return []
      }
      dfs(root.left)
      res.push(root.val)
      dfs(root.right)
  }
  dfs(root)
  return res
}
//遍历法
function inorderTraversal(root){
  var p = root
  res = []
  stack = []
  while(p!==null || stack.length>0){
      if (p!==null){
          stack.push(p)
          p=p.left
      }
      else{
          p=stack.pop()
          res.push(p.val)
          p=p.right
      }
  }
  return res
  
}

//二叉树的后序遍历：左节点->右节点->头结点
//递归法
function postorderTraversal(root){
  var res =[]
  function dfs(root){
      if (!root){
          return []
      }
      
      dfs(root.left)
      dfs(root.right)
      res.push(root.val)
  }
  dfs(root)
  return res
}

//遍历法
function postorderTraversal(root){
  var p = root
  var stack = [root]
  var res = []
  while(stack.length>0){
      p = stack.pop()
      res.push(p.val)
      if (p.left!==null){
          stack.push(p.left)
      }
      if (p.right!==null){
          stack.push(p.right)
      }
  }
  res.reverse()
  return res
}
 
//-----------------------BFS--------------------------------
//二叉树层序遍历
//通过队列来实现
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root){
      return []
  }
  // 最终结果
  var res = []
  // 初始化队列
  var queue = [root]
  // 临时变量保存当前节点
  var tmp = null
  // 临时队列储存下一节点
  var tmpqueue = []
  // 当前层遍历的结果
  var levelres = []
  while (queue.length>0){
      tmp = queue.shift()
      levelres.push(tmp.val)
      if (tmp.left!==null){
          tmpqueue.push(tmp.left)
      }
      if (tmp.right!==null){
          tmpqueue.push(tmp.right)
      }
      //如果当前层遍历完，将当前层结果push到最终结果中并将当前层结果置空，将队列赋值为下一层节点队列（临时队列）并将临时队列置空
      if (queue.length===0){
          queue = tmpqueue.slice(0)
          tmpqueue = []
          res.push(levelres)
          levelres = []
      }
  }
  return res
};
