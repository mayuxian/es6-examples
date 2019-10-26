
//数组的解构
let [a, a1, a2] = [1, 2, 3];
console.log('a, a1, a2= ', a, a1, a2);
let [b, [b1, b2], b3] = [1, [2.1, 2.2], 3];
console.log('b, b1, b2, b3= ', b, b1, b2, b3);
let [c, c1 = 'c1'] = ['c']; //赋值g的默认值为'g'
console.log('c, c1= ', c, c1);
let [d, d1 = 'd1', d2 = 'd2', d3 = 'd3'] = ['d', undefined, null,];
//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效
console.log('d,d1,d2,d3=', d, d1, d2, d3);

let [e, e1 = foo1()] = ['e', undefined];
function foo1() {
  console.log('赋值的解构默认缺省函数');
  return 'default';
}
console.log('e, e1=', e, e1);

//对象的解构
let { bar, foo } = { foo: 'foo', bar: 'bar' };  //顺序可打乱，识别对象的key
console.log('{ bar, foo }:', bar, foo);

let { foo2: baz2 } = { foo2: 'aaa', baz2: 'bbb' };
console.log('baz2,foo2=', baz2/* , foo2 */);
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
console.log(`let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
}; 
p,x,y`, p, x, y);

let arr = [1, 2, 3];
let { 0: first, [arr.length - 1]: last } = arr;
console.log(`first:${first},last:${last}`);

//字符串的解构赋值
const [s1, s2, s3, s4, s5] = 'hello';
console.log('s1, s2, s3, s4, s5:', s1, s2, s3, s4, s5);


//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let { toString: s } = 123;
console.log(`s:`, s);
console.log(`s===Number.prototype.toString:`, s === Number.prototype.toString);

let { toString: s11 } = true;
console.log(`s11:`, s11);
console.log(`s11===Boolean.prototype.toString:`, s11 === Boolean.prototype.toString);

//函数解构
function add([x, y]) {
  return x + y;
}
add([1, 2]); // 3

//---------------
function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}
move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

let m1 = [1, undefined, 3];
let m2 = m1.map((x = 'yes') => x);  //可以圆括号解析
console.log(`m1:${m1},m2"${m2}`);
