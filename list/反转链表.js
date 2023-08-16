class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = newNode
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    console.log(current)
    current.next = newNode
  }

  reverse() {
    let prev = null
    let current = this.head
    let next = null

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
// linkedList.append(3)

// console.log('Original Linked List:')
// linkedList.print()

// linkedList.reverse()

// console.log('Reversed Linked List:')
// linkedList.print()
