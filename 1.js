let nums = [1, 2, 3];
function namea(nums) {
  let nus = nums;
  const backtrack = (path) => {
    nus.forEach((element) => {
      console.log(element);
    });
  };
  backtrack([]);
}
namea(nums);
