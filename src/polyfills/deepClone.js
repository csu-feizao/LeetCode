

const deepClone = (() => {
    const deepTags = ['Map', 'Set', 'Array', 'Object', 'Arguments'];
    const getType = value => Object.prototype.toString.call(value).slice(8, -1);
    const isObject = value => {
        const type = typeof value;
        return value !== null && (type === 'object' || type === 'function')
    };
    const init = (target, ...args) => new target.constructor(...args);

    return function _clone(obj, map = new WeakMap()) {
        if (!isObject(obj)) return obj;
        if (map.has(obj)) return map.get(obj);

        const type = getType(obj);

        if (deepTags.includes(type)) {
            const result = init(obj);
            map.set(obj, result);
            switch (type) {
                case 'Arguments':
                case 'Array':
                    for (let val of obj) {
                        [].push.call(result, _clone(val, map));
                    }
                    return result;
                case 'Set':
                    for (const val of obj) {
                        result.add(_clone(val, map));
                    }
                    return result;
                case 'Map':
                    for (const [key, val] of obj) {
                        result.set(_clone(key, map), _clone(val, map));
                    }
                    return result;
                default:
                    for (const key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            result[key] = _clone(obj[key], map);
                        }
                    }
                    return result;
            }
        }

        switch (type) {
            case 'Boolean':
            case 'Number':
            case 'String':
            case 'Error':
            case 'Date':
                return init(obj, obj.valueOf());
            case 'Symbol':
                return Object(obj.valueOf());
            case 'Function':
                return obj;
            case 'RegExp':
                const result = init(obj, obj.source, /\w*$/.exec(obj));
                result.lastIndex = obj.lastIndex;
                return result;
            default:
                return null;
        }
    }
})();

const a = { b: { f: 'f', e: new Number(4), h: new String('2'), i: new Boolean(true) }, c: 1 };
const b = { a, b: new Date(), c: () => {}, d: [a, new Set([1, 2, 3]), new Map([['a', 1], ['b', 2], ['c', 3]])] };
console.log(deepClone(b));
