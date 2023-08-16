//集合 Set
const arr = [1, 2, 3, 4, 1, 1];

//转换为数组方法
// let set = [...new Set(arr)];
let set = Array.from(new Set(arr));
console.log(set);

//判断元素是否在集合中
let a = new Set(arr);
console.log(a.has(2)); //true

//求集合交集
let b = new Set([1, 2, 3]);
let c = new Set([2, 3]);
let d = new Set([...b].filter((e) => c.has(e)));
console.log(d);
