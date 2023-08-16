var deleteDuplicates = function (head) {
  // 定义一个指针'p'，并将其初始化为链表的头结点'head'
  let p = head;
  // 使用循环遍历链表，条件是'p'存在且'p.next'存在
  while (p && p.next) {
    // 检查当前节点'p'的值与下一个节点'p.next'的值是否相同
    if (p.val === p.next.val) {
      // 如果相同，将当前节点的'next'指针指向下一个节点的'next'，跳过重复节点
      p.next = p.next.next;
    } else {
      // 如果不相同，将指针'p'移动到下一个节点，继续处理下一个元素
      p = p.next;
    }
  }
  // 遍历完成后，返回链表的头结点，链表已经被修改为去除重复元素
  return head;
};
