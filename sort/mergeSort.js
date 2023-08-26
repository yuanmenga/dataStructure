//采用分而治之的思想，大问题拆解成小问题，最后合并小问题的解决结果
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    //拆分问题
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    const sortLeft = rec(left)
    const sortRight = rec(right)
    //返回子问题结果
    const res = []
    while (sortLeft.length || sortRight.length) {
      if (sortLeft.length && sortRight.length) {
        res.push(sortLeft[0] < sortRight[0] ? sortLeft.shift() : sortRight.shift())
      } else if (sortLeft.length) {
        res.push(sortLeft.shift())
      } else if (sortRight.length) {
        res.push(sortRight.shift())
      }
    }
    return res
  }
  return rec(this)
}

// 示例
const arr = [12, 11, 13, 5, 6, 7]
console.log(arr.mergeSort())
