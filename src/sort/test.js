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