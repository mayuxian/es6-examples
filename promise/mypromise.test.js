
//  let myPromise=new MyPromise((resolve,reject)=>{
//       resolve(true);
//  });
//  myPromise.then(result=>{
//         console.log('MyPromise.then');
//    console.log(result);
//  })

let myPromise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
  console.log('running');

  // reject('11')
  // reject(new Error('error'));
  // throw new Error('error');
});
myPromise1.then(result => {
  console.log(result);
  throw new Error('then Error')
}).catch(error => {
  console.log('MyPromise.catch');
  console.error(error);
})

// MyPromise.resolve(1).then((resolve)=>{
//   console.log('MyPromise.resolve');
//   console.log(result);
// })
