### 1、switch 多条件判断

``` js
const Statistics = () => {
  console.log('执行了')
}

// bad
switch (currentTab) {
  case :0,
  Statistics();
  break;
  case :1,
  Statistics();
  break;
  case :2,
  Statistics();
  break;
}

//good
const comoperation = new Map([
  [0, Statistics],
  [1, Statistics],
  [2, Statistics]
])
let getMap = comoperation.get(1)
if (!getMap) {
  console.log('没找到')
} else {
  console.log('执行操作')
  getMap()
}
```

### 2、嵌套if else

``` js
// bad
const onButtonClick = () => {
  if (identity === 'guest') {

    if (status === 1) {
      // 函数处理
    } else if (status === 2) {
      // 函数处理
    } else if (status === 3) {
      // 函数处理
    } else if (status === 4) {
      // 函数处理
    } else {
      // 函数处理
    }

  } else if (identity === 'master') {

    if (status === 1) {
      // 函数处理
    } else if (status === 2) {
      // 函数处理
    } else if (status === 3) {
      // 函数处理
    } else if (status === 4) {
      // 函数处理
    } else {
      // 函数处理
    }

  }
}

// good
const functionA = () => {
  console.log('执行A');
}
const functionB = () => {
  console.log('执行B');
}
const functionC = () => {
  console.log('执行C');
}
const actions = new Map([
  ['guest_1', () => {
    functionA
  }],
  ['guest_2', () => {
    functionB
  }],
  ['default', () => {
    functionC
  }],
])
const onButtonClick = (identity, status) => {
  let action = actions.get( `${identity}_${status}` ) || actions.get('default')
  action.call(this)
}
```

### 3. 骚操作

```js
// 生成随机ID
Math.random().toString(36).substring(2)

// 生成随机16进制
'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')

// 优雅的取整
const a = ~~2.33    // 2
const b = 2.33 | 0  // 2
const c = 2.33 >> 0 // 2

//  金钱格式化
const test = '14566234'

const format = test.replace(/\B(?=(\d{3})+(?!\d))/g, ', ')
console.log(format) // 14566234

const formatCash = (str) => {
  return str.split('').reverse().reduce((prev, next, index) => {

    return ((index % 3) ? next : (next + ',')) + prev

  })
}
console.log(format) // 14566234
