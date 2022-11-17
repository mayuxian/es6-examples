// 5  6  2  3  8
//第一次比较交换后: 5 3 2 6 8
//所以还需要把基点值和小于基点值进行交换 : 3 5 2 6 8

function quickSort(arr, left, right) {
  if (left >= right) return;
  const swap = (arr, i, j) => {
      arr[i] = arr[i] + arr[j];
      arr[j] = arr[i] - arr[j];
      arr[i] = arr[i] - arr[j];
  }
  let i = left, j = right;
  let val = arr[left]
  while (i < j) {
      while (i < j && arr[j] > val) {
          --j;
      }
      while (i < j && arr[i] <= val) {
          ++i;
      }
      if (i < j) {
          swap(arr, i, j)
          // let temp = arr[i];
          // arr[i] = arr[j];
          // arr[j] = temp;
      }
  }
  swap(arr,left,i);
  // arr[left] = arr[i];
  // arr[i] = val;
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}


function quickSort_legacy(arr, left, right) {
  //递归出口
  if (left > right) return;
  let i = left;
  let j = right;
  let val = arr[left] //基点的值,可以是中间数也可以是开始的数
  while (i < j) {
    //从右往左,找到小于等于 val的数
    while (arr[j] > val) { // >则会一直循环比较
      j--
    }
    //从左往右,找到大于 val的数
    while (arr[i] <= val) { // <=则会一直循环比较
      i++
    }
    //对两个值进行交换
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    //不创建临时变量,加减运算交换
    // x=x+y
    // y=x-y
    // x=x-y
    // arr[i] = arr[i] + arr[j]
    // arr[j] = arr[i] - arr[j]
    // arr[i] = arr[i] - arr[j]

    //位运算
    // x = x ^ y
    // y = x ^ y
    // x = x ^ y
  }
  arr[left] = arr[i]
  arr[i] = val;

  quickSort(arr, left, i - 1)
  quickSort(arr, i + 1, right)
}