const New = (constructor, ...args) => {
    // const obj = {};
    // obj.__proto__ = constructor.prototype;
    const obj = Object.create(constructor.prototype);
    const ret = constructor.apply(obj, args);
    return ret instanceof Object ? ret : obj;
};

const F1 = function () {
    //
};
const F2 = function () {
    return { name: 'F2' }
};
const F3 = function () {
    return null;
};
const F4 = function () {
    return () => {};
};
const F5 = function () {
    return 5;
};
const F6 = function () {
    return new Boolean(true);
};

console.log(Object.getPrototypeOf(new F1()) === Object.getPrototypeOf(New(F1)));
console.log(Object.getPrototypeOf(new F2()) === Object.getPrototypeOf(New(F2)));
console.log(Object.getPrototypeOf(new F3()) === Object.getPrototypeOf(New(F3)));
console.log(Object.getPrototypeOf(new F4()) === Object.getPrototypeOf(New(F4)));
console.log(Object.getPrototypeOf(new F5()) === Object.getPrototypeOf(New(F5)));
console.log(Object.getPrototypeOf(new F6()) === Object.getPrototypeOf(New(F6)));
