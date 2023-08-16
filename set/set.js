let set = new Set();
//新增
set.add(1);
set.add("2");
set.add({ a: 0, b: 1 }); //内存地址不同
set.add({ a: 0, b: 1 });
console.log(set); //{ 1, '2', { a: 0, b: 1 }, { a: 0, b: 1 } }
//删除
set.delete(1);
console.log(set); //{ '2', { a: 0, b: 1 }, { a: 0, b: 1 } }
