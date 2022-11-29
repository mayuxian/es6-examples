//https://www.cnblogs.com/jerryfish/p/15436841.html
// 谈谈对 async/await 的理解，async/await 的实现原理是什么?
// 1）async/await 就是 Generator 的语法糖，使得异步操作变得更加方便
// 2）async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成await
function spwan(genF) {
  return new Promise((resolve, reject) => {
    const gen = genF();
    const step = (nextF) => {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(result => {
        step(() => { return gen.next(result) })
      }).catch(error => {
        step(() => { return gen.throw(error) })
      })
    };
    step(() => { return gen.next(undefined) });
  })
}

function testAsync2(params) {
  return new Promise((resolve, reject) => {
    console.log('testAsync2 running');
    setTimeout(() => {
      resolve('testAsync2 callback:' + params)
    }, 2000);
    console.log('testAsync2 running2');
  });
}

function* testAsync1() {
  console.log('testAsync1 begin');
  yield testAsync2('testAsync2 run');
  console.log('testAsync1 end');
}
function testSpwan() {
  return spwan(testAsync1);
}
