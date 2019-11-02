const makePath = (path) => {
    if (Array.isArray(path)) return path;

    return path.split('.').filter(val => !!val);
};

const isObject = obj => obj && (typeof obj === 'object' || typeof obj === 'function');

const setValueByPath = (obj, path, val) => {
    if (!isObject(obj) || !path) return false;

    path = makePath(path);
    const { length } = path;

    if (!length) return false;

    if (length === 1) {
        obj[path[0]] = val;
        return true;
    }

    return setValueByPath(obj[path.shift()], path, val);
};


const test = { a: { b: { c: '1' } } };
console.log(setValueByPath(test, 'a.b.c.d', 2), test);
console.log(setValueByPath(test, 'a.b.c', 2), test);
console.log(setValueByPath(test, ['a', 'b', 'c'], 3), test);
console.log(setValueByPath(test, 'a', 1), test);