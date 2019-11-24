var a = new Object();
a.value = 1;
var b = a;
b.value = 2;
console.log(`
var a = new Object();
a.value = 1;
b = a;
b.value = 2;
结果：
`, a);

console.log('--------------');
var a2 = 10; b2 = 20; c2 = 4;
console.log(`
var a=10;b=20;c=4;
++b+c+a--
结果： 
`, ++b2 + c2 + a2--);


console.log('--------------');

var a1 = 2;
console.log(`
var a=2;
a++ + ++a + a++ + ++a  = `, a1++ + ++a1 + a1++ + ++a1);

console.log('---------------');
console.log(`Number('a1')`, Number('a1'));
console.log(`1..toString()`, 1..toString());
// console.log(`1.toString()`, 1.toString());

console.log('---------------');

//若想发现连续等于的坑，请参照 continued equality
// var a = { n: 1 };
// var ref = a;
// a.x = a = { n: 0 };
