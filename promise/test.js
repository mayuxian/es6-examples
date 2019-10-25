let promise = new Promise((resolve, reject) => {
  // reject(new TypeError('error'));
  reject('error');
}).then((result, error) => {
  console.log(result);
  console.log('222');
  console.error(error);
});

// Promise.resolve(true).then(result => {
//   console.log(result);
// })