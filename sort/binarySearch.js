//二分搜索前提数组是有序的
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + high);
    let element = this[mid];
    if (element > item) {
      high = mid - 1;
    } else if (element < item) {
      low = mid + 1;
    } else if (element == item) {
      return mid;
    }
  }
  return -1;
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.binarySearch(4));
