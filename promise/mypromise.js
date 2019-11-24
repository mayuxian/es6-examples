class MyPromise {
  constructor(executor) {
    this._statusType = { Pendding: 0, Fulfilled/*Resolved*/: 1, Rejected: 2 };
    this._status = this._statusType.Pendding;
    this._value = undefined;
    this._reason = undefined;
    this._onFulfilledCallbacks = [];
    this._onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this._status == this._statusType.Pendding) {
        this._status = this._statusType.Fulfilled;
        this._value = value;

        this._onFulfilledCallbacks.forEach(cb => { cb(); });
      }
    };

    let reject = (reason) => {
      if (this._status == this._statusType.Pendding) {
        this._status = this._statusType.Rejected;
        this._reason = reason;
        
        this._onRejectedCallbacks.forEach(cb => { cb(); })
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  };
  then(onFuifilled, onRejected) {
    onFuifilled = (typeof onFuifilled === "function") ? onFuifilled : value => { return value; };
    onRejected = (typeof onRejected === "function") ? onRejected : reason => { throw reason; };
    let promise = null;
    let fulFilledCallback = (resolve, reject) => {
      setTimeout(() => {
        try {
          let resolveResult = onFuifilled(this._value);
          this.resolvePromise(promise, resolveResult, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    };
    let rejectedCallback = (resolve, reject) => {
      setTimeout(() => {
        try {
          let rejectResult = onRejected(this._reason);
          this.resolvePromise(promise, rejectResult, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    }
    promise = new MyPromise((resolve, reject) => {
      if (this._status === this._statusType.Pendding) {
        this._onFulfilledCallbacks.push(() => { fulFilledCallback(resolve, reject) });
        this._onRejectedCallbacks.push(() => { rejectedCallback(resolve, reject) });
      } else if (this._status === this._statusType.Fulfilled) {
        fulFilledCallback(resolve, reject);
      } else if (this._status === this._statusType.Rejected) {
        rejectedCallback(resolve, reject)
      }
    });
    return promise;
  };
  catch(onRejected) {
    return this.then(null, onRejected);
  };

  resolvePromise(headPromise, x, resolve, reject) {
    if (headPromise === x) {
      return reject(new TypeError('Promise循环调用'));
    }
    if (x == null || (typeof x !== 'object' && typeof x !== 'function')) { //若为null或者不是对象和函数，则x为普通值，返回结果。
      resolve(x);
      return;
    }
    let called = false;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, (thenResult) => {
          if (called) return;
          called = true;
          this.resolvePromise(headPromise, thenResult, resolve, reject);
        }, error => {
          if (called) return;
          called = true;
          reject(error);
        })
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  };

  static resolve(value) {
    let promise = new MyPromise((resolve, reject) => {
      this.resolvePromise(promise, value, resolve, reject);
    })
    return promise;
  };

}
