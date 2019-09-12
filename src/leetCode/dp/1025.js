/**
 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

 选出任一 x，满足 0 < x < N 且 N % x == 0 。
 用 N - x 替换黑板上的数字 N 。
 如果玩家无法执行这些操作，就会输掉游戏。

 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

  

 示例 1：

 输入：2
 输出：true
 解释：爱丽丝选择 1，鲍勃无法进行操作。
 示例 2：

 输入：3
 输出：false
 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
  

 提示：

 1 <= N <= 1000

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/divisor-game
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 题解一：动态规划 dp(k, true) = dp(k - j, false); k % j === 0 && 1 <= j < k;
const divisorGame = function (N) {
    const dp = [];
    dp[0] = false;
    dp[1] = false;
    for (let i = 2; i <= N; i++) {
        let win = false;
        const max = Math.floor(i / 2);
        for (let j = 1; j <= max; j++) {
            if (i % j === 0 && !dp[i - j]) {
                win = true;
                break;
            }
        }
        dp[i] = win;
    }
    return dp[N];
};

console.log(divisorGame(50));
console.log(divisorGame(81));

// 题解二：SG函数博弈算法，代码略

// 题解三：奇数的因子必定是奇数，把奇数留给对手，自己拿到的一定是偶数，因此奇数必输，偶数必赢，代码略
