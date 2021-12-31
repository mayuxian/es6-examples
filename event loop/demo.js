//http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
//访问上面的，可以查看执行过程
console.log(1);
setTimeout(function () {
  console.log(2);
  Promise.resolve().then(function () {
    console.log(3);
  })
  console.log(8);
}, 20)

for (let i = 0; i < 1000; i++) { console.log('--') }
new Promise(function (resolve, reject) {
  console.log(4);
  resolve(5);
}).then(function (data) {
  console.log(data)
})

setTimeout(function () {
  console.log(6);
}, 10)
console.log(7)