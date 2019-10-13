const curring = (fn) => {
    const argList = [];
    const func = function (...args) {
        if (args.length === 0) {
            return fn.apply(this, argList);
        } else {
            [].push.apply(argList, args);
            return func;
        }
    };
    return func;
};

const reduceFn = fn => (...args) => args.reduce((pre, cur) => {
    return fn(pre, cur);
});
const sum = (a, b) => a + b;
console.log(curring(reduceFn(sum))(1)(2)(3)(4)());
