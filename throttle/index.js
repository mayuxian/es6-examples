const throttle = (fn, delay = 1000) => {
  return (...args) => {
    clearTimeout(this.timer)
    //若要判断首次执行
    if (this.running === undefined) {
      fn.apply(this.args)
      this.running = false;
      return;
    }
    if (this.running) return;//
    this.running = true;
    this.timer = setTimeout(() => {
      fn.apply(this.args)
      this.running = false;
    }, delay);
  }
}