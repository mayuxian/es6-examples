
//原生的Promise，输出的是 0，1，2，3，4，5，6，
//自己实现的mypromise,输出的是 0，1，2，4，3，5，6，
Promise.resolve().then(() => {
  console.log(0);
  // const p= Promise.resolve(4);
  const p = new Promise((resolve, reject) => {
    resolve(4)
  })
  console.log(p);
  return p
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})
