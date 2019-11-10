//nodejs的event loop和浏览器的event loop不一致
async function test1() {
  console.log('test1 begin');
  await test2('test2');
  console.log('test1 end');
  await test2('test2-1');
}

function test2(info) {
  console.log(info);
  return new Promise((resolve, reject) => {
    console.log(info + '.promise')
    resolve(info + ' resolve');
  }).then(result => { console.log(result) });
}

console.log(1);
test1();

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  // resolve(5);  //这个在最上面还是最下面都一样，因为console.log(4)是同步
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