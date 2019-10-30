//二进制和八进制表示法
console.log('二进制:0b 或 0B');
console.log('八进制:0o 或 0O');

console.log(`Number('0b111'):`, Number('0b111'));
console.log(`Number('0o11'):`, Number('0o11'));
console.log('检查是否数值有限');
console.log(`Number.isFinite(15):`, Number.isFinite(15));
console.log(`Number.isFinite(0.8):`, Number.isFinite(0.8));
console.log(`Number.isFinite(NaN):`, Number.isFinite(NaN));
console.log(`Number.isFinite(Infinity):`, Number.isFinite(Infinity));
console.log(`Number.isFinite(-Infinity):`, Number.isFinite(-Infinity));
console.log(`Number.isFinite('foo'):`, Number.isFinite('foo'));
console.log(`Number.isFinite('15'):`, Number.isFinite('15'));
console.log(`Number.isFinite(true):`, Number.isFinite(true));

console.log(`Number.isNaN(NaN):`, Number.isNaN(NaN));
console.log(`Number.isNaN('12.3'):`, Number.isInteger('12.3'));
console.log(`Number.isNaN(12.3):`, Number.isInteger(12.3));
console.log(`Number.isNaN(12):`, Number.isInteger(12));
console.log(`Number.isInteger(12.0):`, Number.isInteger(12.0));

console.log('');
console.log('小数精度问题：');
console.log(`精度丢失原因：IEEE 754 规范，采用双精度存储（double precision），占用 64 bit,当计算超出位数时，就会丢失精度`);
//https://www.cnblogs.com/thinkingthigh/p/8073526.html
console.log(`对数进行上舍入：Math.ceil(12.34):`, Math.ceil(12.34));
console.log(`对数进行下舍入：Math.floor(12.56):`, Math.floor(12.56));
console.log(`对数进行四舍五入：Math.round(12.54):`, Math.round(12.54))
console.log(`对数进行四舍五入：Math.round(12.5):`, Math.round(12.5))
console.log(`对数进行四舍五入：Math.round(12.1):`, Math.round(12.1))

console.log('Number.parseInt转换小数时，小数位都舍去');
console.log(`Number.parseInt('12.80#')`, Number.parseInt('12.80#'));
console.log(`Number.parseInt(' 12.5#')`, Number.parseInt(' 12.5#'));
console.log(`Number.parseFloat('12.5364#')`, Number.parseFloat('12.5364#'));
console.log(`指定16进制转换：Number.parseInt('A0',16)=160`, Number.parseInt('A0', 16));

console.log(`Math.abs(-12.3):`, Math.abs(-12.3));
console.log(`2.446.toFixed(2):`, 2.446.toFixed(2));
console.log(`2.446.toPrecision(3):`, 2.446.toPrecision(3));
console.log(`2.335.toFixed(2):`, 2.335.toFixed(2));
console.log(`2.3351.toFixed(2):`, 2.3351.toFixed(2));
console.log(`12.335.toPrecision(4):`, 12.335.toPrecision(4));
console.log(`以上toFixed和toPrecision要做四舍五入的精度位是0.5，判断是否进1时，都会舍去的`);
console.log('');

console.log('若四舍五入则最好选中以下这种方式：');
console.log(`Math.round(2.335000*100)/100 :`, Math.round(2.335000 * 100) / 100);
console.log(`Math.round(2.335000*100)/100 :`, Math.round(2.335000 * 100) / 100);
console.log(`(100.1+9.8)= :`, (100.1 + 9.8));
console.log(`(100.1+9.8)*100/100= :`, (100.1 + 9.8) * 100 / 100);
console.log('小数乘以1000，再除以1000，精度还是有问题');
console.log(`(100.1+9.8)*1000/1000= :`, (100.1 + 9.8) * 1000 / 1000);


let en = function equalNumber(left, right, ignorePrecision = 2) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, ignorePrecision);
}
console.log(`${en}`);
console.log(`Number.isInteger(3.0000000000000002) =true`, Number.isInteger(3.0000000000000002) );
console.log(`当小数位数>15位时，则超出浮点数范围，会被判断成int型`);

console.log(`小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。`);
console.log('0.1+0.2=', 0.1 + 0.2);
console.log('equalNumber(0.1+0.2,0.3):', en(0.1 + 0.2, 0.3));

console.log(`Math.sign(-1.3):`, Math.sign(-1.3));
console.log(`Math.trunc(-2.32):`, Math.trunc(-2.32));
console.log(`JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。`);
console.log(`Math.pow(2, 53) :`, Math.pow(2, 53) );

console.log(`Number.isSafeInteger(9007199254740990):`, Number.isSafeInteger(9007199254740990));
console.log(`Number.isSafeInteger(9007199254740992):`, Number.isSafeInteger(9007199254740992));
