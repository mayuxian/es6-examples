
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

console.log('add(1)',add(1))
console.log('add(1)(2)',add(1)(2))
console.log('add(1,2)',add(1,2))
console.log('add(1)(2,3)',add(1)(2,3))
console.log('add(1,2)(3)',add(1,2)(3))
console.log('add(1,2)(3)(4)',add(1,2)(3)(4))