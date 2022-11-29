
console.log('----------test1 begin------------');
//TODO:变量提升var t; 难道不应该输出undefined吗？
console.log('test1:', test1);
console.log('test1():', test1());  //或先执行test函数再去log('test1()')
console.log('t=', t);

function test1() {
  console.log('t:', t);
  console.log('this.t:', this.t);
}
//test1();  //此处执行则为空
var t = 't';
test1();
console.log('----------test1 end------------');

console.log('--------var循环 begin----------');
var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = function () {
    return i;
  }
}

console.log('arr[5]()', arr[5]());
console.log('--------var循环 end----------');

//TODO: 域和变量提升和this指针的的问题？
console.log('---------嵌套func+obj begin---------');
var a = 'a';
function test() {
  // console.log('a:', a);
  var b = 'b';
  var a = 'a1';
  function fn() {
    // var b = 'b1';
    console.log('a:', a);
    console.log('this.a:', this.a);
    console.log('b:', b);
    console.log('this.b:', this.b);
  }
  fn();
  return fn;
}

let testFn = test();
console.log('--------嵌套func+obj end----------');
// testFn.bind(this)();
