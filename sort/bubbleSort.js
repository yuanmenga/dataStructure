//比较所有相邻元素，如果第一个比第二个大，则交换他们，一轮下来可以保证最后一个数是最大的。（需要执行n-1轮）
//算法时间复杂度：O(n的平方)
Array.prototype.bubbleSort = function () {
  let arr = this;
  let temp;
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  console.log(arr);
};
let arr = [2, 7, 14, 45, 3];
arr.bubbleSort();
