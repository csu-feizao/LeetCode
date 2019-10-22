const currying = function (fn, ...args) {
    if (fn.length <= args.length) {
        return fn(...args);
    }
    return function (...args1) {
        return currying(fn, ...args, ...args1)
    }
};


const add = (a, b, c) => {
    return a + b + c;
};

const curryingAdd = currying(add);
console.log(curryingAdd(1)(2, 3));