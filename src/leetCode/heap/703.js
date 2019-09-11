/**
 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。

 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。

 示例:

 int k = 3;
 int[] arr = [4,5,8,2];
 KthLargest kthLargest = new KthLargest(3, arr);
 kthLargest.add(3);   // returns 4
 kthLargest.add(5);   // returns 5
 kthLargest.add(10);  // returns 5
 kthLargest.add(9);   // returns 8
 kthLargest.add(4);   // returns 8
 说明:
 你可以假设 nums 的长度≥ k-1 且k ≥ 1。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
import PriorityQueue from './PriorityQueue';

// 题解，维护大小为k的小顶堆
class KthLargest {
    constructor(k, nums) {
        const compare = (a, b) => a - b;

        const { length } = nums;
        let left = length - k;
        if (left > 0) {
            const array = nums.slice(0, k);
            this.pQueue = new PriorityQueue(array, compare);
            while (left > 0) {
                this.add(nums[length - left]);
                left--;
            }
        } else {
            this.pQueue = new PriorityQueue(nums, compare);
        }

        this.k = k;
    }

    add(value) {
        if (this.pQueue.size() < this.k) {
            this.pQueue.add(value);
        } else if (value > this.pQueue.top()) {
            this.pQueue.add(value);
            this.pQueue.poll();
        }
        return this.pQueue.top();
    }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));   // returns 4
console.log(kthLargest.add(5));   // returns 5
console.log(kthLargest.add(10));  // returns 5
console.log(kthLargest.add(9));   // returns 8
console.log(kthLargest.add(4));   // returns 8
