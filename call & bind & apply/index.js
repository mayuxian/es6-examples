Function.prototype._call = function (context) {
  context = context || window;
  context.fn = this;   //若怕fn有重复的，则需要加上随机码，放置fn覆盖和重复
  var args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype._apply = function (context) {
  context = context || window;
  context.fn = this;
  let argsArr = arguments[1];
  let result = null;
  if (argsArr) {
    result = context.fn(...argsArr);
  } else {
    result = context.fn();
  }
  delete result;
  return result;
}


Function.prototype._bind = function (context) {
  let _this = this;
  let args = [...arguments].slice(1);
  return function BindFn() {
    if (this instanceof BindFn) {
      return new _this(...args, ...arguments);
    }
    return _this._apply(context, args.concat(...arguments));
  }
}