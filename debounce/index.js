var count = 0;
function click1() {
  console.log('点击次数：', ++count);
}
const debounce = (fn, delay = 1000) => {
  return (...args) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log('debounce run');
      fn.apply(this, args);
    }, delay);
  };
};

//下图timer未指定this,则不可行
// const debounce = (fn, delay = 1000) => {
//   let timer = null;
//   return (...args) => {
//     console.log(`clear timer:`, timer);  //必须要写this.
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//     console.log(`timer value:`, timer);
//   };
// };

function debounce2(func, wait = 1000) {
  let timeout;
  let context = this //传给目标函数
  return function () {
    console.log(`clear timeout2:`, context.timeout);
    clearTimeout(context.timeout);
    context.timeout = setTimeout(() => {
      func.apply(context, arguments)
    }, wait)
    console.log(`timeout2 value:`, context.timeout);
  }
}

// try {
//   console.log('clearTimeout(null)未报错'); //无需判断clearTimeout是否为null
//   clearTimeout(null);
// } catch (error) {
//   console.log(error);
// };
