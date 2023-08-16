const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

//深度优先,先访问根元素，然后对根元素的子元素挨个进行深度优先遍历
const dfs = (tree) => {
  console.log(tree.val);
  tree.children.forEach(dfs);
};
dfs(tree);
