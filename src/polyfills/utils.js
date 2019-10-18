export const isEmpty = (val) => [null, undefined].includes(val);

export const isArrayLike = (obj) => {
    return obj &&
        typeof obj === 'object' &&
        isFinite(obj.length) &&
        obj.length >= 0 &&
        obj.length === Math.floor(obj.length);
};

export const isNode = typeof process !== 'undefined' &&
    {}.toString.call(process) === '[object process]';

