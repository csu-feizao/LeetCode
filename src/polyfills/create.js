Object.create1 = function (prototype) {
    function F() {}
    F.prototype = prototype;
    return new F();
};

Object.create2 = function (prototype) {
    const obj = {};
    obj.__proto__ = prototype;
    return obj;
};