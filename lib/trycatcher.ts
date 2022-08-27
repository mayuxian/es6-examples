export function trycatchHandling(fn: any, ...args: any) {
    try {
      console.log('test trycatch...')
      fn && fn(...args)
    } catch (err: any) {
      ElMessage?.error(err?.message)
    }
  }
  export function trycatchHandling2(fn: any, ...args: any) {
    try {
      console.log('test trycatch...')
      fn && fn(...args)
    } catch (err: any) {
      ElMessage?.error(err?.message)
    }
  }
  
  // https://blog.csdn.net/qq_36380426/article/details/123366743
  // export function callWithErrorHandling(
  //   fn: Function,
  //   instance: ComponentInternalInstance | null,
  //   type: ErrorTypes,
  //   args?: unknown[]
  // ) {
  //   let res
  //   try {
  //     res = args ? fn(...args) : fn() // 调用原方法
  //   } catch (err) {
  //     handleError(err, instance, type)
  //   }
  //   return res
  // }
  
  function testmain() {
    trycatchHandling(test1)
    trycatchHandling(testAsync)
    trycatchHandling(testAsync2)
  }
  testmain()
  
  function test1(args: any) {
    throw new Error('???' + args)
  }
  
  function testAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('??222')
      }, 1000)
    })
  }
  
  async function testAsync2() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('??3333')
      }, 2000)
    })
  }
  