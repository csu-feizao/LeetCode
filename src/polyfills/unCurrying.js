const unCurring = function () {
    const self = this;
    return function (obj, ...args) {
        return self.apply(obj, args);
    }
};

const push = unCurring.call(Array.prototype.push);
const arr = [1, 2];
push(arr, 3, 4, 5);
console.log(arr);
