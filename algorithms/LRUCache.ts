//https://zhuanlan.zhihu.com/p/34989978
//https://blog.csdn.net/qq_32281471/article/details/100789278

class LRUCache<T extends any> {
  private _cache = new Map<string | number, T>()
  private _max?: number;
  constructor(max?: number) {
    this._max = max;
  }

  get(key: string | number): any {
    const val = this._cache.get(key);
    if (!val) return val;
    this.upsert(key, val)
    return val;
  }

  put(key: string | number, value: T) {
    this.upsert(key, value)
    if (this._max && this._cache.size > this._max) {
      //删除第一个
      this._cache.delete(this._cache.keys().next().value)
    }
  }

  private upsert(key: string | number, value: any) {
    if (this._cache.has(key)) {
      this._cache.delete(key)
    }
    this._cache.set(key, value)
  }
}



class LRUCache_legacy {
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
