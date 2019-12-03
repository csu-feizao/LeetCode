// Object.prototype[Symbol.iterator] = function () {
//     let index = 0;
//     const isDone = () => index >= Object.entries(this).length;
//     return {
//         next: () => {
//             const done = isDone();
//             let value = done ? undefined : Object.entries(this)[index];
//             index = done ? index : index + 1;
//             return { value, done };
//         }
//     }
// };

Object.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < Object.entries(this).length; i++) {
        yield Object.entries(this)[i];
    }
};

let obj = { a: 1, b: 2, c: 3};
for (let [key, val] of obj) {
    console.log('a', key, val);
    if (key === 'a') {
        obj.d = 4;
    }
}