class EventEmitter {
  constructor() {
    this._events = new WeakMap();
  }

  addListener(type, listener, context) {
    if (this._events.has(type)) {
      let listeners = this._events.get(type);
      listeners, set(listener, context);
    } else {
      let map = new Map();
      map.set(listener, context);
      this._events.set(type, map);
    }
  }

  removeListener(type, listener) {
    if (this._events.has(type)) {
      let listeners = this._events.get(type);
      listeners.delete(listener);
    }
  }
  once(type, listener, context) {
    let called = false;
    let listenerWrapper = (...args) => {
      if (called) return;
      listener.apply(listener || context, args);
      called = true;
      this.removeListener(type, listener);
    }
    this.addListener(type, listenerWrapper, context);
  };
  emit(type, ...args) {
    let listeners = this._events.get(type);
    if (listeners) {
      listeners.forEach((listener, context) => {
        listener.call(listener || context, ...args, context);
      });
      // listeners.forEach((listener, context) => {
      //   let lis = listener;
      //   listener = function (...args) {  //装饰一下，保证function函数的this指针是运行的上下文
      //     lis.call(this, [...args], context);
      //   }
      //   listener.call(this, [...rest], context);
      // });
    }
  }

  on(type, listener, context) {
    return this.addListener(type, listener, context);
  }

  off(type, listener) {
    return this.removeListener(type, listener);
  }

}

export {
  EventEmitter
}