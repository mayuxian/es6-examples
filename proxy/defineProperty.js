//https://blog.csdn.net/weixin_39576104/article/details/111283190

function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        enumerable: true, configurable: true,
        get: function defineGet() {
            console.log(`get key: ${key} value: ${value}`);
            return value
        },
        set: function defineSet(newVal) {
            console.log(`set key: ${key} value: ${newVal}`);
            value = newVal
        }
    })
}
function observe(data) {
    Object.keys(data).forEach(
        function (key) {
            defineReactive(data, key, data[key])
        })
}
let arr = [1, 2, 3];
observe(arr)

console.log('arr.pop()');
arr.pop();
console.log('arr.push(3)');
arr.push(3);
console.log('arr.push(4)');
arr.push(4);
console.log('arr.push(5)');
arr.push(5);
console.log('arr.pop()');
arr.pop();
console.log('arr[1] = 2');
arr[1] = 2;
console.log('arr[3] = 4');
arr[3] = 4;
console.log('arr.shift()');
arr.shift()
console.log('arr.unshift()');
arr.unshift()
console.log("arr.splice(0,0,'a')");
arr.splice(0,0,'a')
console.log('arr.sort((pre,cur)=>pre-cur)');
arr.sort((pre,cur)=>pre-cur)
console.log('arr.reverse()');
arr.reverse()