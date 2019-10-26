import Sort from './index';


const bubbleSort = new Sort.BubbleSort([1, 8, 4, 6, 10, 4, 9, 2, 1]);
console.log(bubbleSort.sort());
const selectSort = new Sort.SelectSort([1, 8, 4, 6, 10, 4, 9, 2, 1]);
console.log(selectSort.sort());
const insertSort = new Sort.InsertSort([1, 8, 4, 6, 10, 4, 9, 2, 1]);
console.log(insertSort.sort());
const shellSort = new Sort.ShellSort([1, 8, 4, 6, 10, 4, 9, 2, 1], (a, b) => a- b, 3);
console.log(shellSort.sort());
const heapSort = new Sort.HeapSort([1, 8, 4, 6, 10, 4, 9, 2, 1]);
console.log(heapSort.sort());
const mergeSort = new Sort.MergeSort([1, 8, 4, 6, 10, 4, 9, 2, 1]);
console.log(mergeSort.sort());
const quickSort = new Sort.QuickSort([1, 8, 4, 6, 10, 4, 9, 2, 1]);
console.log(quickSort.sort());


// var bubbleSort = (array) => {
//     for (var i = array.length - 1; i >= 0; i--) {
//         var flag = false;
//         for (var j = 0; j < i; j++) {
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 flag = true;
//             }
//         }
//         if (!flag) break;
//         flag = false;
//     }
//     console.log(array);
// }
//
// var reBubbleSort = array => {
//     for (var i = 0; i < array.length; i++) {
//         var flag = false;
//         for (var j = array.length - 1; j > i; j--) {
//             if (array[j] < array[j - 1]) {
//                 [array[j], array[j - 1]] = [array[j - 1], array[j]];
//                 flag = true;
//             }
//         }
//         if (!flag) break;
//         flag = false;
//     }
//     console.log(array);
// }
//
// var selectSort = array => {
//     for (var i = 0; i < array.length - 1; i++) {
//         var min = i;
//         for (var j = i + 1; j < array.length; j++) {
//             if (array[min] > array[j]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//             [array[i], array[min]] = [array[min], array[i]];
//         }
//     }
//     console.log(array);
// }
//
// var insertSort = array => {
//     for (var i = 1; i < array.length; i++) {
//         var temp = array[i];
//         for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
//             array[j + 1] = array[j];
//         }
//         array[j + 1] = temp;
//     }
//     console.log(array)
// }
//
// var shellSort = (array, step = 2) => {
//     for (let group = Math.floor(array.length / step); group > 0; group = Math.floor(group / step)) {
//         for (let i = group; i < array.length; i++) {
//             let temp = array[i];
//             for (var j = i - group; j >= 0 && array[j] > temp; j -= group) {
//                     array[j + group] = array[j];
//             }
//             array[j + group] = temp;
//         }
//     }
//     console.log(array)
// }
//
// var mergeSort = (array) => {
//     var _sort = (origin, result, start, end) => {
//         var arr = [];
//         if (start === end) {
//             result[start] = origin[end];
//         } else {
//             var mid = Math.floor((start + end) / 2);
//             _sort(origin, arr, start, mid);
//             _sort(origin, arr, mid + 1, end);
//             _merge(arr, result, start, mid, end);
//         }
//         return result;
//     };
//     var _merge = (origin, result, start, mid, end) => {
//         var i = start;
//         var j = mid + 1;
//         while (start <= mid && j <= end) {
//             if (origin[start] > origin[j]) {
//                 result[i++] = origin[j++];
//             } else {
//                 result[i++] = origin[start++];
//             }
//         }
//         while (start <= mid) {
//             result[i++] = origin[start++];
//         }
//         while (j <= end) {
//             result[i++] = origin[j++];
//         }
//     };
//     _sort(array, array, 0, array.length - 1);
//     console.log('merge sort', array)
// }
//
// var quickSort = (array) => {
//     var _sort = (start, end) => {
//         if (start < end) {
//             var [p1, p2] = partition(start, end);
//             _sort(start, p1 - 1);
//             _sort(p2 + 1, end);
//         }
//     }
//     var partition = (start, end) => {
//         var cur = start + 1;
//         var pivotVal = array[start];
//         while (cur <= end) {
//             if (array[cur] === pivotVal) {
//                 cur++;
//             } else if (array[cur] < pivotVal) {
//                 [array[start], array[cur]] = [array[cur], array[start]];
//                 cur++;
//                 start++;
//             } else {
//                 [array[cur], array[end]] = [array[end], array[cur]];
//                 end--;
//             }
//         }
//         // array[start] = pivotVal;
//         return [start, end];
//     }
//     _sort(0, array.length - 1);
//     console.log('quick sort', array)
// }
//
// var heapSort = array => {
//     const { length } = array;
//     const sort = arr => {
//         makeHeap(arr);
//
//         for (let i = length - 1; i >= 0; i--) {
//             swap(0, i);
//             siftDown(0, i - 1);
//         }
//     };
//
//     const makeHeap = arr => {
//         for (let i = Math.floor(length / 2); i >= 0; i--) {
//             siftDown(i, length - 1);
//         }
//     };
//
//     const swap = (i, j) => [array[i], array[j]] = [array[j], array[i]];
//
//     const siftDown = (start, end) => {
//         let child = start * 2 + 1;
//         const temp = array[start];
//         while (child <= end) {
//             if (child < end && array[child + 1] > array[child]) {
//                 child++;
//             }
//             if (temp >= array[child])
//                 break;
//             array[start] = array[child];
//             start = child;
//             child = child * 2 + 1;
//         }
//         array[start] = temp;
//     };
//
//     sort(array);
//     console.log(array);
// };
// heapSort([1, 8, 4, 6, 10, 4, 9, 2, 1])