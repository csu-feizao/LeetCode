const makePath = (path) => {
    if (Array.isArray(path)) return path;

    return path.split('.').filter(val => !!val);
};

const isObject = obj => obj && (typeof obj === 'object' || typeof obj === 'function');

const getValueByPath = (obj, path, defaultValue) => {
    if (!isObject(obj) || !path) return defaultValue;

    path = makePath(path);
    const { length } = path;

    if (!length) return defaultValue;

    if (length === 1) {
        obj = obj[path[0]];
        return obj === undefined ? defaultValue : obj;
    }

    return getValueByPath(obj[path.shift()], path, defaultValue);
};


const test = { a: { b: { c: '1' } } };
console.log(getValueByPath(test, 'a.b.c', 'empty'));
console.log(getValueByPath(test, ['a', 'b', 'c'], 'empty'));
console.log(getValueByPath(test, 'a.b'));
console.log(getValueByPath(test, 'a.d.e.f'));
console.log(getValueByPath(test, 'a.d', 'dd'));