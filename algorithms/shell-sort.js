//https://www.jianshu.com/p/fe5ccc63d523
//希尔排序

function sort(arr) {
    //增量gap，并逐步缩小增量
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        //从第gap个元素，逐个对其所在组进行直接插入排序操作
        console.log('gap；', gap);
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            console.log('j：', j);
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                //插入排序采用交换法
                swap(arr, j, j - gap);
                j -= gap;
            }
        }
    }
    return arr
}

function swap(arr, left, right) {
    arr[left] = arr[left] + arr[right];
    arr[right] = arr[left] - arr[right];
    arr[left] = arr[left] - arr[right];
}

console.log(sort([8, 9, 1, 7, 2, 3, 5, 4, 6, 0, 7]))