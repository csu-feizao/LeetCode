// Object.prototype[Symbol.iterator] = function () {
//     const entries = Object.entries(this);
//     const { length } = entries;
//     let index = 0;
//     let done = index >= length;
//     return {
//         next: () => {
//             let value = done ? undefined : entries[index];
//             done = index >= length;
//             index = done ? index : index + 1;
//             return { value, done };
//         }
//     }
// };

Object.prototype[Symbol.iterator] = function* () {
    const entries = Object.entries(this);
    const { length } = entries;
    for (let i = 0; i < length; i++) {
        yield entries[i];
    }
};

let obj = { a: 1, b: 2, c: 3};
for (let [key, val] of obj) {
    console.log('a', key, val);
}