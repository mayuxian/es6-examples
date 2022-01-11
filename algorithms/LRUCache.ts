//https://zhuanlan.zhihu.com/p/34989978
//https://blog.csdn.net/qq_32281471/article/details/100789278

class LRUCache {
    cache: Map<number, any>
    constructor(public capacity: number) {
      this.cache = new Map()
    }
    // 用 key 获取一个值
    get(key: number): any {
      const v = this.cache.get(key)
      if (v === undefined) {
        return -1
      } else {
        this.moveToEnd(key, v)
        return v
      }
    }
   
    moveToEnd(k: number, v: any) {
      this.cache.delete(k)
      this.cache.set(k, v)
    }
   
    // 插入一个值
    put(key: number, value: any) {
      if (this.cache.has(key)) {
        this.cache.delete(key)
      } else if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
      }
      this.cache.set(key, value)
    }
  }
