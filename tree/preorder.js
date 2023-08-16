const bt = require("./bt");
//循环实现
const preorder = (root) => {
  const stack = [root];
  while (stack.length) {
    let n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};
//递归实现
// const preorder = (root) => {
//   if (!root) {
//     return;
//   }
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };
preorder(bt);
