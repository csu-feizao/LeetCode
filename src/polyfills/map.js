const map = (array, fn) =>
    array.reduce((pre, cur) => {
        pre.push(fn(cur, pre.length, array));
        return pre;
    }, []);

console.log(map([1,2,3], (val, index) => val * index));
