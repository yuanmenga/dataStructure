# js语法

## 字符串（String）

### 获取长度

使用`length`属性可以获取字符串长度

```text
console.log("houdunren.com".length)
```

### 大小写转换

将字符转换成大写格式

```text
console.log('houdunren.com'.toUpperCase()); //HOUDUNREN.COM
```

转字符为小写格式

```text
console.log('houdunren.com'.toLowerCase()); //houdunren.com
```

### 移除空白

使用`trim`删除字符串左右的空白字符

```text
let str = '   houdunren.com  ';
console.log(str.length);
console.log(str.trim().length);
```

使用`trimLeft`删除左边空白，使用`trimRight`删除右边空白

```text
let name = " houdunren ";
console.log(name);
console.log(name.trimLeft());
console.log(name.trimRight());
```

### 获取单字符

根据从 0 开始的位置获取字符

```text
console.log('houdunren'.charAt(3))
```

使用数字索引获取字符串

```text
console.log('houdunren'[3])
```

### 截取字符串

使用 `slice、substr、substring` 函数都可以截取字符串。

- slice、substring 第二个参数为截取的结束位置
- substr 第二个参数指定获取字符数量

```text
let hd = 'houdunren.com';
console.log(hd.slice(3)); //dunren.com
console.log(hd.substr(3)); //dunren.com
console.log(hd.substring(3)); //dunren.com

console.log(hd.slice(3, 6)); //dun
console.log(hd.substring(3, 6)); //dun
console.log(hd.substring(3, 0)); //hou 较小的做为起始位置
console.log(hd.substr(3, 6)); //dunren

console.log(hd.slice(3, -1)); //dunren.co 第二个为负数表示从后面算的字符
console.log(hd.slice(-2));//om 从末尾取
console.log(hd.substring(3, -9)); //hou 负数转为0
console.log(hd.substr(-3, 2)); //co 从后面第三个开始取两个
```

### 查找字符串

从开始获取字符串位置，检测不到时返回 `-1`

```text
console.log('houdunren.com'.indexOf('o')); //1
console.log('houdunren.com'.indexOf('o', 3)); //11 从第3个字符向后搜索
```

从结尾来搜索字符串位置

```text
console.log('houdunren.com'.lastIndexOf('o')); //11
console.log('houdunren.com'.lastIndexOf('o', 7)); //1 从第7个字符向前搜索
```

search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索

```text
let str = "houdunren.com";
console.log(str.search("com"));
console.log(str.search(/\.com/i));
```

`includes` 字符串中是否包含指定的值，第二个参数指查找开始位置

```text
console.log('houdunren.com'.includes('o')); //true
console.log('houdunren.com'.includes('h', 11)); //true
```

`startsWith` 是否是指定位置开始，第二个参数为查找的开始位置。

```text
console.log('houdunren.com'.startsWith('h')); //true
console.log('houdunren.com'.startsWith('o', 1)); //true
```

`endsWith` 是否是指定位置结束，第二个参数为查找的结束位置。

```text
console.log('houdunren.com'.endsWith('com')); //true
console.log('houdunren.com'.endsWith('o', 2)); //true
```

下面是查找关键词的示例

```text
const words = ["php", "css"];
const title = "我爱在后盾人学习php与css知识";
const status = words.some(word => {
  return title.includes(word);
});
console.log(status);
```

###  替换字符串

`replace` 方法用于字符串的替换操作

```text
let name = "houdunren.com";
web = name.replace("houdunren", "hdcms");
console.log(web);
```

默认只替换一次，如果全局替换需要使用正则（更强大的使用会在正则表达式章节介绍）

```text
let str = "2023/02/12";
console.log(str.replace(/\//g, "-"));
```

使用字符串替换来生成关键词链接

```text
const word = ["php", "css"];
const string = "我喜欢在后盾人学习php与css知识";
const title = word.reduce((pre, word) => {
  return pre.replace(word, `<a href="?w=${word}">${word}</a>`);
}, string);
document.body.innerHTML += title;
```

使用正则表达式完成替换

```text
let res = "houdunren.com".replace(/u/g, str => {
  return "@";
});
console.log(res);
```

### 重复生成

下例是根据参数重复生成星号

```text
function star(num = 3) {
	return '*'.repeat(num);
}
console.log(star());
```

下面是模糊后三位电话号码

```text
let phone = "98765432101";
console.log(phone.slice(0, -3) + "*".repeat(3));
```

### 类型转换

分隔字母

```text
let name = "hdcms";
console.log(name.split(""));
```

将字符串转换为数组

```text
console.log("1,2,3".split(",")); //[1,2,3]
```

隐式类型转换会根据类型自动转换类型

```text
let hd = 99 + '';
console.log(typeof hd); //string
```

使用 `String` 构造函数可以显示转换字符串类型

```text
let hd = 99;
console.log(typeof String(hd));
```

js 中大部分类型都是对象，可以使用类方法 `toString`转化为字符串

```text
let hd = 99;
console.log(typeof hd.toString()); //string

let arr = ['hdcms', '后盾人'];
console.log(typeof arr.toString()); //string
```

## 数组（Array）

- 管理元素

| **方法** | **是否改变原数组** | **特点**                                                     |
| -------- | ------------------ | ------------------------------------------------------------ |
| push     | 是                 | 从后压入元素，直接改变元数组，返回值为数组元素数量           |
| pop      | 是                 | 从末尾弹出元素，直接改变元数组，返回值为弹出的元素           |
| shift    | 是                 | 从开头弹出元素，直接改变元数组，返回值为弹出的元素           |
| unshift  | 是                 | 从前压入元素，直接改变元数组，返回值为数组元素数量           |
| fill     | 是                 | 填充数组，直接改变元数组                                     |
| slice    | 否                 | 第一个参数为从哪开始截取，第二个参数为截取的位置（并不会改变原数组），返回值为新数组 |
| splice   | 是                 | 第一个参数为从哪开始删除，第二个参数为删除的数量，第三个参数来设置在删除位置添加的元素，返回值为删除的元素 |

- 合并拆分

| **方法**   | **是否改变原数组** | **特点**                                               |
| ---------- | ------------------ | ------------------------------------------------------ |
| join       | 否                 | 将数组连接成字符串，不改变元数组，返回值为字符串       |
| split      | 否                 | 将字符串分割成数组，返回值为新数组                     |
| concat     | 否                 | 用于连接两个或多个数组，浅拷贝                         |
| copyWithin | 是                 | 从数组中复制一部分到同数组中的另外位置，返回值为新数组 |

- 查找元素

| **方法**    | **特点**                                                     |
| ----------- | ------------------------------------------------------------ |
| indexOf     | 从前向后查找元素出现的位置，如果找不到返回 -1，找到返回索引位置（`indexOf` 类似于`===`是严格类型约束，8和‘8’不一样） |
| lastIndexOf | 和上一个相反                                                 |
| includes    | 找到返回true，没找到返回false                                |
| find        | 如果找到返回数据，找不到返回值为`undefined`，使用`includes`等不能查找引用类型，`find` 可以方便的查找引用类型 |
| findIndex   | `findIndex` 与 `find` 的区别是返回索引值，找不到返回-1       |

- 数组排序

| **方法** | **特点**                 |
| -------- | ------------------------ |
| reverse  | 反转数组顺序             |
| sort     | 从大到小或者从小到大排序 |

- 循环遍历

| **方法** | **特点**                                                   |
| -------- | ---------------------------------------------------------- |
| for      | 根据数组长度结合`for` 循环来遍历数组                       |
| forEach  | `forEach`使函数作用在每个数组元素上，直接在原数组上操作    |
| for/in   | 遍历时的 key 值为数组的索引                                |
| for/of   | 与 `for/in` 不同的是 `for/of` 每次循环取其中的值而不是索引 |

- 迭代器和扩展方法

| **方法** | **特点**                                                     |
| -------- | ------------------------------------------------------------ |
| keys     | 通过迭代对象获取索引                                         |
| values   | 通过迭代对象获取值                                           |
| entries  | 返回数组所有键值对，下面使用解构语法循环                     |
| every    | 递归的检测元素，要所有元素操作都要返回真结果才为真           |
| some     | 递归的检测元素，如果有一个返回 true，表达式结果就是真        |
| filter   | 过滤数据中元素，返回新数组                                   |
| map      | 映射数组的所有元素，有return才会将元素放入新数组中，不会改变原数组 |
| reduce   | 第一个参数是执行函数，第二个参数为初始值                     |

## 集合（Set）

Set（只能有唯一的值），ES6语法，与数组最大的区别就是每个值都是唯一的

基本语法：

- 初始化Map：`let set = new Set([1, "1"])`
- 增加：`set.add(2).add(3); 支持链式操作`
- 删除：`set.delete("name")`
- 修改：`set.set(1, "com")`
- 查找：`set.get("name")`
- 元素是否存在：`map.has(1)`
- 获取元素数量：`set.size`
- 删除所有：`set.clear()`

转换数组：展开语法` 或 `Array.form

```js
const set = new Set([1, 2, 4]);
console.log([...set]); //[1, 2, 4]
console.log(Array.from(set)); //[1, 2, 4]
```

遍历数据：

使用 `keys()/values()/entries()、for of 、forEach`

`keys()和values()值相同`

```js
let set = new Set([7, 6, 2, 8, 2, 6]);
//使用for/of遍历，默认使用 values 方法创建迭代器
for (const key of set) {
	console.log(key);
}
//使用forEach遍历
set.forEach((item,key) => console.log(item,key));
```

## 字典（Map）

Map（键值对形式），ES6语法，与对象最大的区别就是Map的键可以是任何类型。

基本语法：

- 初始化Map：`let map = new Map([["1", "开源"]])`
- 增加：`map.set(1, "houdunren.com").set("name", "hdcms"); 支持链式操作`
- 删除：`map.delete("name")`
- 修改：`map.set(1, "com")`
- 查找：`map.get("name")`
- 元素是否存在：`map.has(1)`
- 获取元素数量：`map.size`
- 删除所有：`map.clear()`

转换数组：展开语法` 或 `Array.form

```js
let hd = new Map([
  ["houdunren", "后盾人"],
  ["hdcms", "开源系统"],
]);
console.log([...hd]); //['houdunren', '后盾人']、['hdcms', '开源系统']
console.log(Array.from(hd)); //['houdunren', '后盾人']、['hdcms', '开源系统']
```

遍历数据：

使用 `keys()/values()/entries()、for of 、forEach`

```js
let hd = new Map([["houdunren", "后盾人"], ["hdcms", "开源系统"]]);
for (const [key, value] of hd) {        // hd 等同于 hd.entries()
  console.log(`${key}=>${value}`);
}
hd.forEach((value, key) => {
  console.log(`${key}=>${value}`);
});
```

