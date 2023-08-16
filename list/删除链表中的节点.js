const a = { v: 'a' }
const b = { v: 'b' }
const c = { v: 'c' }
const d = { v: 'd' }
a.next = b
b.next = c
c.next = d
function deleteNode(node) {
  node.v = node.next.v
  node.next = node.next.next
  return a
}
console.log(deleteNode(b))
