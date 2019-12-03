// 非递归前序遍历 144
function visitDLR(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        result.push(node.value);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return result;
}

// 非递归中序遍历 94
function visitLDR(root) {
    if (!root) return [];
    const result = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        if (cur) {
            // 左节点进栈
            stack.push(cur);
            cur = cur.left;
        } else {
            // 出栈
            const node = stack.pop();
            result.push(node.value);
            // 右节点的左节点继续进栈
            cur = node.right;
        }
    }
    return result;
}

// 非递归后序遍历 145
function visitLRD(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        // 左右根 -> 根右左的逆序 -> 参考先序遍历实现逆序
        result.unshift(node.value);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return result;
}

function visitLRD1(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    let pre = null;
    while (stack.length) {
        const node = stack[stack.length - 1];
        // 当前节点为叶子节点时直接出栈；前一节点为当前节点的子节点时，表示左右节点均已访问，可直接出栈
        if (!node.left && !node.right ||
          pre && (pre === node.left || pre === node.right)) {
            result.push(node.value);
            stack.pop();
            pre = node;
        } else {
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }
    }
    return result;
}

// 树的层次遍历 102
function visitLevelOrder(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        let { length } = stack;
        const level = [];
        while (length--) {
            const node = stack.shift();
            level.push(node.value);
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        result.push(level);
    }
    return result;
}

// 树的层序遍历，自底向上 107
function visitLevelOrderBottom(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        let { length } = stack;
        const level = [];
        while (length--) {
            const node = stack.shift();
            level.push(node.value);
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        result.unshift(level);
    }
    return result;
}

// 树的锯齿形遍历 103
function visitZigzagLevelOrder(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        let { length } = stack;
        const level = [];
        // 根据奇偶判断是正向还是逆向
        const add = result.length % 2 ? Array.prototype.unshift : Array.prototype.push;
        while (length--) {
            const node = stack.shift();
            add.call(level, node.value);
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        result.push(level);
    }
    return result;
}

// 二叉树的层平均值 637
function averageOfLevels(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        const { length } = stack;
        let len = length;
        let total = 0;
        while (len--) {
            const node = stack.shift();
            total += node.value;
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        result.push(total / length);
    }
    return result;
}


// N叉树的层序遍历
function visitLevelOrderN(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];
    while (stack.length) {
        let { length } = stack;
        const level = [];
        while (length--) {
            const node = stack.shift();
            level.push(node.val);
            node.children && node.children.length && [].push.apply(stack, node.children);
        }
        result.push(level);
    }
    return result;
}

// [9, 10, 11, 12, 13, 14, 15, null, null, null, 16]
const test = {
    value: 9,
    left: {
        value: 10,
        left: {
            value: 12,
            left: null,
            right: null
        },
        right: {
            value: 13,
            left: null,
            right: null
        }
    },
    right: {
        value: 11,
        left: {
            value: 14,
            left: null,
            right: {
                value: 16,
                left: null,
                right: null
            }
        },
        right: {
            value: 15,
            left: null,
            right: null
        }
    }
};
console.log(visitDLR(test));
console.log(visitLDR(test));
console.log(visitLRD(test));
console.log(visitLRD1(test));
console.log(visitLevelOrder(test));
console.log(visitLevelOrderBottom(test));
console.log(visitZigzagLevelOrder(test));
console.log(averageOfLevels(test));