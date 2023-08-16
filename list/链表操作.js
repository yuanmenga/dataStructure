class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    // 头结点
    this.head = null;
  }
  // 增加节点
  append(value) {
    // 新增节点
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    //拿到倒数第二个节点
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  //输出链表
  print() {
    let current = this.head;
    while (current) {
      current = current.next;
      console.log(current);
    }
  }
  // 反转链表
  reverse() {
    let left = null;
    let right = this.head;
    let temp = null;
    while (right != null) {
      temp = right.next;
      right.next = left;
      left = right;
      right = temp;
    }
    return left;
  }
}
// const hd = new LinkedList()
// hd.append(1)
// hd.append(2)
// hd.append(3)
// hd.print()
// console.log(hd)
// console.log(hd.reverse())
const l1 = new LinkedList();
const l2 = new LinkedList();
const l3 = new LinkedList();
l1.append(3);
l1.append(6);
l1.append(5);
l2.append(7);
l2.append(8);
l2.append(3);

module.exports = {
  l1,
  l2,
  l3,
  ListNode,
};
