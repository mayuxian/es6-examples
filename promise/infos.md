
## ES6的Promise

- Promise.all() 
只有所有实例都变成fulfilled，或其中一个rejected，则回调结果

- Promise.any()
只要有一个实例变成fulfilled状态，或所有的实例都返回rejected状态，则回调结果

- Promise.race()
回调率先返回fulfilled或rejected状态的结果。

- Promise.allSettled()
当所有的实例都返回fulfilled或rejected时，则回调结果，并且结果为：
```
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```