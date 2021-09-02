export async function retryRequest(promise, args, options, errorCb) {
  const { count, timeout } = options || { count: 3, timeout: 50 }

  const sleep = (promise, args, wait) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        promise(args)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      }, wait)
    })
  }

  for (let i = 1; i <= count; i++) {
    try {
      const result = await sleep(promise, args, i === 1 ? 0 : timeout)
      return result
    } catch (err) {
      //自定义处理异常
      if (errorCb && errorCb instanceof Function) {
        //如果errorCb返回true,表示不再尝试
        const isNoTry = errorCb(err)
        if (isNoTry) {
          throw err
        }
      } else if (!(err instanceof Error)) {
        //若不是Error对象,则表示是业务错误,直接抛异常
        throw err
      }
      if (i === count) {
        throw err
      }
    }
  }
}
