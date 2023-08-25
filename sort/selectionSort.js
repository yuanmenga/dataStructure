Array.prototype.selectioSort = function () {
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  console.log(arr);
};
let arr = [6, -1, 4, 2, 1, 8];
arr.selectioSort();
