const isObject = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function');

function instanceOf(left, right) {
    if (!isObject(right))
        throw new Error('TypeError: Right-hand side of \'instanceof\' is not an object');

    const { prototype } = right;

    while (left) {
        left = left.__proto__;

        if (left === prototype) return true;
    }
    return false;
}


console.log(instanceOf(function () {}, Function));
console.log(function () {} instanceof Function);