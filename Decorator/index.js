//TODO:缺少运行测试
function decorator(target) {
  target.prototype.isTest = true;
}

@decorator()
class MyTestClass {
  constructor() {

  }
}

let obj = new MyTestClass();
console.log(`
    @decorator()
    class MyTestClass{
    constructor(){

    }
    }
  new MyTestClass()  :
  `, obj);

  //---------------------------------------
function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable; //静态函数
    target.prototype.isTestable = isTestable;
  }
};

function readonly(target, name, descriptor) {
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  console.log('propertyName:', name);
  descriptor.writable = false;
  return descriptor;
}
function log(target,name,descriptor) {
  let oldValue=descriptor.value;
  descriptor.value=function () {
    console.log(`Calling ${name} with`,arguments);
    return oldValue.apply(this,arguments);
  }
  return descriptor;
}
@testable(true)
class MyTestClass2 {
  constructor(){

  }
  // readonly(Person.prototype, 'name', descriptor);
 @readonly()
 level(){
   return 0;
 }

 @log
 getValue(value='test'){

 }
}


// @readonly

let obj1 = new MyTestClass2();
console.log(`
@decorator()
class MyTestClass2{
constructor(){

}
}
new MyTestClass2() :
`, obj1);
