const compose = (...fns) => {
    if (!fns.length)
        return (...args) => args;

    if (fns.length === 1)
        return fns[0];

    return fns.reduce((a, b) => (...args) => a(b(...args)));
};


function a(obj) {
    obj.a = 'a';
    return obj;
}

function b(obj) {
    obj.b = 'b';
    return obj;
}

function c(obj) {
    obj.c = 'c';
    return obj;
}

console.log(compose(a, b, c)({}));