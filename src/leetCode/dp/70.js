/**
 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 注意：给定 n 是一个正整数。

 示例 1：

 输入： 2
 输出： 2
 解释： 有两种方法可以爬到楼顶。
 1.  1 阶 + 1 阶
 2.  2 阶
 示例 2：

 输入： 3
 输出： 3
 解释： 有三种方法可以爬到楼顶。
 1.  1 阶 + 1 阶 + 1 阶
 2.  1 阶 + 2 阶
 3.  2 阶 + 1 阶

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/climbing-stairs
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 题解一：动态规划
const climbStairs = function (n) {
    if (n < 1) return 0;
    const ways = [1, 2];
    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n - 1];
};

console.log(climbStairs(50));

// 题解二：动态规划优化版，优化存储空间
const climbStairs1 = function (n) {
    if (n < 1) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let m1 = 1;
    let m2 = 2;
    for (let i = 2; i < n; i++) {
        const temp = m1 + m2;
        m1 = m2;
        m2 = temp;
    }
    return m2;
};

console.log(climbStairs1(50));

// 题解三：斐波那契数列尾递归版
const climbStairs2 = function (n) {
    if (n < 1) return 0;

    const fibonacci = (n, sum1, sum2) => {
        if (n === 1) return sum1;
        return fibonacci(n - 1, sum2, sum1 + sum2);
    };
    return fibonacci(n, 1, 2);
};

console.log(climbStairs2(50));