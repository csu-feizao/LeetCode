/**
 有一堆石头，每块石头的重量都是正整数。

 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

 如果 x == y，那么两块石头都会被完全粉碎；
 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

  

 提示：

 1 <= stones.length <= 30
 1 <= stones[i] <= 1000

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/last-stone-weight
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
import PriorityQueue from './PriorityQueue';

// 第一种解法：大顶堆
const lastStoneWeight = function (stones) {
    const pQueue = new PriorityQueue(stones, (a, b) => b - a);
    while (pQueue.size() > 1) {
        const left = pQueue.poll() - pQueue.poll();
        if (left > 0) {
            pQueue.add(left);
        }
    }
    return pQueue.empty() ? 0 : pQueue.top();
};

console.log(lastStoneWeight([1, 3]));


// 第二种解法：排序，二分插入
const lastStoneWeight1 = function (stones) {
    const binarySearch = (array, value) => {
        const { length } = array;
        let start = 0;
        let end = length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (array[mid] > value) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
    const binaryInsert = (array, value) => {
        const { length } = array;
        if (!length) {
            array.push(value);
            return;
        }
        const index = binarySearch(array, value);
        for (let i = length - 1; i >= index; i--) {
            array[i + 1] = array[i];
        }
        array[index] = value;
    };

    [].sort.call(stones, (a, b) => a - b);
    while (stones.length > 1) {
        const left = stones.pop() - stones.pop();
        if (left > 0) {
            binaryInsert(stones, left);
        }
    }
    return stones.length > 0 ? stones[0] : 0;
};


console.log(lastStoneWeight1([8, 10, 4]));