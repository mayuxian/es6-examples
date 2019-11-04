//nodejs的event loop和浏览器的event loop不一致

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  resolve(5);  //这个在最上面还是最下面都一样，因为console.log(4)是同步
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);

  Promise.resolve().then(() => {
    console.log(6)
  }).then(() => {
    console.log(7)

    setTimeout(() => {
      console.log(8)
    }, 0);
  }); 
})

setTimeout(() => {
  console.log(9);
})

console.log(10);

//浏览器 output:
// 1
// 4
// 10
// 5
// 6
// 7
// 2
// 3    //此处不一致
// 9    //此处不一致
// 8

//nodejs output:
// 1
// 4
// 10
// 5
// 6
// 7
// 2
// 9    //此处不一致
// 3    //此处不一致
// 8

//浏览器和nodejs的event loop主要不同是因为nodejs的event loop是将check类型的主任务全执行后才会执行微任务。