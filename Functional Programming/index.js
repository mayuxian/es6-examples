//若想实现一个将多位数组的数值累加的总和的需求：
//方式一：
let arr = [1, [2, 2], [3, 3]];
let arr1 = arr.flat(Infinity).reduce((total, value, index, arr) => {
  return total + value;
}, 0);
console.log('arr1:', arr1);

//通过函数式编程方式
//方式二：
//es5
function add(x) {
  return function addFun(y) {
    if (y) {
      return add(x + y);  //可以递归多次调用，但需要之后一次调用()执行
    } else {
      return x;
    }
  }
}

let result = add(1)(2)(3)();
console.log('add(1)(2)(3)():', result);


let arr2 = arr.flat(Infinity).reduce((totalFun, value) => { return totalFun(value); }, add);
console.log('arr2:', arr2());

//通过函数式编程方式
//方式三：
//es6方式
let sum = (x) => (y => {
  if (y) {
    return sum(x + y);
  }
  return x;
});
let sum1 = sum(1);
let sum2 = sum1(2);
console.log(`sum2:${sum2},\r\n result:${sum2()}`);