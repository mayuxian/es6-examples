//地址：https://www.cnblogs.com/goloving/p/9297019.html
// 优先级问题
// 优先级由高到低：小括号(xxx) > 属性访问.   > new foo() > foo()
// 注意new Foo()优先级高于Foo();

function getName() {
  console.log(1)
}
function Foo() {
  this.getName = function () {
    console.log(2);
  };
  return this;
}
Foo.getName = function () {
  console.log(3);
};
//先从.属性访问符号开始往前面找一个最近的对象，同时注意new Foo()优先于Foo();
var a = new Foo.getName();//3;
// 属性.的优先级高于new foo() ，所以 === new (Foo.getName)(); 返回Foo.getName类型的实例
var b = new Foo().getName();//2;
// new foo()的优先级高于foo() ，所以就相当于new foo()的属性，=== (new Foo()).getName() ；返回undefined
var c = new new Foo().getName();//2;
// new foo()优先级低于属性.，所以其实相当于就是new一个new foo()的getName属性函数，=== new (new Foo().getName)(); 返回Foo.getName类型的实例
console.log(new Date().toString()); //===((new Date()).getTime)()
console.log((new Date).toLocaleString());//===((new Date()).getTime)()
console.log((new Date).toDateString());//===((new Date()).getTime)()
console.log((new Date).toLocaleDateString());//===((new Date()).getTime)()
console.log((new Date).toTimeString());//===((new Date()).getTime)()
console.log((new Date).toLocaleTimeString());//===((new Date()).getTime)()
console.log((new Date).toString('yyyy MM:DD HH:mm:ss'));//===((new Date()).getTime)()
console.log(new Date.getTime());//Uncaught TypeError: Date(...).getTime is not a function；===new (Date.getTime)()