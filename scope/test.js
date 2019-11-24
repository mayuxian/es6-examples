console.log(foo());
function foo() {
  return bar();  //output->8
  // var bar= ()=>{return 7;};
  //return bar();  //output->7
  // var bar=function (){return 6;};
  //return bar();   //output->6

  // let bar=()=>{return 5;};
  //1.若let bar之上仍存在var bar,或function bar()定义,则输出：Uncaught SyntaxError: Identifier 'bar' has already been declared
  //2.若只有let bar则输出：5
  //return bar();   

  // let bar=function (){return 4;};
  // return bar();   //output->4

  function bar() {
    return 8;
  }
}

//暂时性死区：
var temp = 123;
if (true) {
  // temp='abc';
  let temp = 0;  //若有temp='abc'则，会ReferenceError
  console.log(temp);
}

function test1() {
  this.a = 1;
  this.func = function () {
    var a = 3;
    console.log(this.a);
    console.log(a);
  };
  this.func();
}

test1();
  //es6生命变量的6中方式：var  function  let  const  import class
