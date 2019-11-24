
console.log('a');
setTimeout(() => {
  console.log('b');
}, 0);

let promise = new Promise((resolve, reject) => {
  console.log('c');
  setTimeout(() => {
    console.log('c1');
    // resolve();
    reject();
    resolve();
  }, 10);
  setTimeout(() => {
    console.log('d');
  });
});

promise.then(() => {
  console.log('e');
})
promise.then(() => {
  console.log('f');
})
promise.catch(err => {
  console.log('error');
})
console.log('g');

