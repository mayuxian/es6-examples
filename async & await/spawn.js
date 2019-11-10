
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
