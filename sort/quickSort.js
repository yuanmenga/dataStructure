Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    const middle = arr.pop();
    for (let i = arr.length - 1; i >= 0; i--) {
      if (middle > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), middle, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((item, index) => {
    this[index] = item;
  });
  return this;
};
let arr = [8, 2, 1, 6, 75, 6, 4, 3, 5];
console.log(arr.quickSort());
