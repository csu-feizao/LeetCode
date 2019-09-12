/**
 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 示例:

 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 进阶:

 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/maximum-subarray
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 题解一：动态规划
const maxSubArray = function (nums) {
    if (!nums || !nums.length) return;

    const sums = [nums[0]];
    let max = sums[0];
    for (let i = 1; i < nums.length; i++) {
        sums[i] = Math.max(sums[i - 1] + nums[i], nums[i]);
        max = Math.max(sums[i], max);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// 题解二: 动态规划优化版，优化存储空间
const maxSubArray1 = function (nums) {
    if (!nums || !nums.length) return;

    let currentMax = nums[0];
    let totalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        totalMax = Math.max(currentMax, totalMax);
    }
    return totalMax;
};

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]));