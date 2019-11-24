
async function proAll() {

  let p1 = new Promise((resolve, reject) => {
    resolve('p1 result');
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 result delay')
    }, 1000);
  })

  let p3 = new Promise((resolve, reject) => {
    reject('p3 error')
  }).catch(err => err);

  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p3 error delay')
    }, 500);
  })
  console.log('-------primise.all begin-------');

  console.log(`（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，
  此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，
此时第一个被reject的实例的返回值，会传递给p的回调函数。`);
  
  let proAll = await Promise.all([p1, p2]);
  console.log('promise.all:', proAll);

  console.log('------------');
  let proAll2 = await Promise.all([p1, p2, p4]).catch(err => {
    console.log('若子Promise未处理catch，则all可以通过catch捕获异常:', err);
  });
  console.log('promise.all 有一个reject则返回:', proAll2);

  console.log('------------');
  try {
    let proAll3 = await Promise.all([p1, p2, p3]);
    console.log('若子Promise已处理catch，则all不可以通过catch捕获异常');
    console.log('promise.all 有一个reject则返回:', proAll3);
  } catch (error) {
    console.log('若子Promise已处理catch，则all不可以通过catch捕获异常:', err);
  }
  console.log('-------primise.all end-------');
};

async function proRace() {

  let p1 = new Promise((resolve, reject) => {
    resolve('p1 result');
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 result delay')
    }, 1000);
  })

  let p3 = new Promise((resolve, reject) => {
    reject('p3 error')
  }).catch(err => err);

  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p3 error delay')
    }, 500);
  })
  console.log('-------primise.race begin-------');
  console.log(`只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
  那个率先改变的 Promise 实例的返回值，就传递给p的回调函数`);

  let proRace = await Promise.race([p1, p2]);
  console.log('promise.race 正常情况:', proRace);
  console.log('////////////');

  let proRace2 = await Promise.race([p2, p4]).catch(err => {
    console.log('promise.race 异常error:', err);
  });
  console.log('promise.race:', proRace2);
  console.log('////////////');

  console.log('promise.race中若子任务是非promise的，则会调用promise.resolve处理');
  let proRace3 = await Promise.race(['字符串：非promise', p1]);
  console.log('promise.race :', proRace3);
  console.log('-------primise.race end-------');
};


async function proAllSettled() {

  let p1 = new Promise((resolve, reject) => {
    resolve('p1 result');
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 result delay')
    }, 1000);
  })

  let p3 = new Promise((resolve, reject) => {
    reject('p3 error')
  })  

  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p3 error delay')
    }, 500);
  })
  console.log('-------primise.allSettled begin-------');

  console.log(`返回的新的 Promise 实例，一旦结束，状态总是fulfilled，
  不会变成rejected。状态变成fulfilled后，Promise 的监听函数接收到的参数是一个数组，
  每个成员对应一个传入Promise.allSettled()的 Promise 实例`);

  let proAllSettled = await Promise.allSettled([p1, p2, p3, p4]);
  console.log('promise.allSettled:', proAllSettled);


  console.log('-------primise.allSettled end-------');
};

async function proAny() {
  let p1 = new Promise((resolve, reject) => {
    resolve('p1 result');
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 result delay')
    }, 1000);
  })

  let p3 = new Promise((resolve, reject) => {
    reject('p3 error')
  })

  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p3 error delay')
    }, 500);
  })
  console.log('-------primise.any begin-------');
  console.log('chrome浏览器暂不支持Promise.any，目前还是第三阶段提案。');
  
  console.log(`只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；
  如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态`);

  let proAny = await Promise.any([p2, p3, p4]);
  console.log('promise.any:', proAny);

  let proAny2 = await Promise.any([p3, p4]).catch(err => {
    console.log('promise.any 所以任务都报错：', err);
  });
  console.log('promise.any 所有任务报错返回结果:', proAny2);

  console.log('-------primise.any end-------');
};

(async function run() {
  await proAll();
  console.log('');
  await proRace();
  console.log('');
  await proAllSettled();
  console.log('');
  await proAny();
})();
