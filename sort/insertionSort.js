Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let temp = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
        j--
      } else {
        break
      }
      this[j] = temp
    }
  }
  return this
}

// 示例
const arr = [12, 11, 13, 1, 5, 6, 7]
console.log(arr.insertionSort())
