let obj = {
    msg: {
     a: 10
    },
    arr: [1, 2, 3]
   }
   
   let handler = {
    get(target, key){
     console.log('get', target, key);
     //懒监听，去获取的时候才监听对象里面的对象，而不是直接递归循环监听
     if(typeof target[key] === 'object' && target[key] !== null){
      return new Proxy(target[key], handler);
     }
     return Reflect.get(target, key);
    },
    set(target, key, value){
     console.log('set', target, key, value);
     //数组新增会执行两次，一次是修改length，一次是添加值
     let oldValue = target[key];
     if(!oldValue){
      //找不到老值，新增
     }else if(oldValue !== value){
      //老值和新值不相等，修改
     }
     return Reflect.set(target, key, value);
    }
   }
   
   let proxy = new Proxy(obj, handler)
   proxy.arr.push(4);
   proxy.msg.a = 50;
   proxy.msg.b = 60;
   proxy.c = 70;
 