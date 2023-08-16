// //有效的括号
let arr = '()'
function isValid(arr) {
  if (arr.length % 2 === 1) return false
  const a = Array.from(arr)
  const stack = []
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === ']' || a[i] === '}' || a[i] === ')') stack.push(a[i])
    else {
      let t = stack[stack.length - 1]
      if ((a[i] === '[' && t === ']') || (a[i] === '{' && t === '}') || (a[i] === '(' && t === ')')) stack.pop()
      else return false
    }
  }
  return stack.length === 0
}
console.log(isValid(arr))
