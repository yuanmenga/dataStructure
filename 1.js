var subsets = function (nums) {
  const res = [];

  const backtrack = (start, path) => {
    res.push([...path]); // 将当前子集的副本添加到结果数组中

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // 将当前元素添加到子集中
      backtrack(i + 1, path); // 递归生成下一个元素的子集
      console.log(1);
      path.pop(); // 回溯，将刚刚添加的元素移除，以尝试其他元素组合
    }
  };

  backtrack(0, []);
  return res;
};

// 示例用法
const nums = [1, 2, 3];
const result = subsets(nums);
console.log(result);
