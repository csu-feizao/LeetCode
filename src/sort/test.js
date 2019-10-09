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
// shellSort([1, 8, 4, 6, 10, 4, 9, 2, 1])