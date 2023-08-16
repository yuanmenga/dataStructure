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
//广度优先
const bfs = (root) => {
  const q = [root];
  while (q.length) {
    let a = q.shift();
    console.log(a.val);
    a.children.forEach((child) => {
      q.push(child);
    });
  }
};
bfs(tree);
