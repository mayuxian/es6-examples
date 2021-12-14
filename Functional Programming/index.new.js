
//柯里化函数
function add(x, y) {
  //获取函数入参参数,并拷贝一份
  var _args = Array.prototype.slice.call(arguments);
  //内部声明实际执行的函数,通过闭包方式保存入参_args
  var _adder = function () {
    //返回_adder,可实现多次递归调用后,多次入参保存到_args中
    _args.push(...arguments)
    return _adder;
  }
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b
    })
  }
  //Object类型,可重新valueOf返回函数的原始值
  _adder.valueOf = function () {
    return _args.reduce(function (a, b) {
      return a + b
    })
  }
  return _adder;
}

console.log('add(1)', add(1))
console.log('add(1)(2)', add(1)(2))
console.log('add(1,2)', add(1, 2))
console.log('add(1)(2,3)', add(1)(2, 3))
console.log('add(1,2)(3)', add(1, 2)(3))
console.log('add(1,2)(3)(4)', add(1, 2)(3)(4))



//ramda库的方式,此种是必须达到约定的参数才会执行
function curry(fn) {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return fn(...args)
  }
}


//ramda和loadash中柯里化函数
const curry = (fn, ...args) =>
  // 函数的参数个数可以直接通过函数数的.length属性来访问
  args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);
