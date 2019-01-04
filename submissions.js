
var loopSum = function(root, sum, array) {
  if (root){
    if (sum > root.val){
        let leftArrays = loopSum(root.left, sum-root.val , array.push(root.val))
        let rightArrays = loopSum(root.right, sum-root.val , array.push(root.val))
        return [leftArrays, rightArrays]
    }
    if (sum === root.val && !root.left && !root.right){
        // 到这表示找到了所有路径
        return array.push(root.val)
    }
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  return loopSum(root, sum, [])
};

const root = [5,4,8,11,null,13,4,7,2,null,null,5,1]
console.log(pathSum(root, 22));