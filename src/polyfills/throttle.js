const throttle = (fn, time) => {
    let timer;
    let firstTime = true;
    return function (...args) {
        if (firstTime) {
            firstTime = false;
            fn.apply(this, args);
            return;
        }
        if (timer) return false;
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
        }, time);
    }
};

const sleep = (time) => new Promise(resolve => {
    setTimeout(() => {
        resolve();
        console.log('sleep ', time);
    }, time);
});
const log = throttle(console.log, 250);
(async function () {
    for (let i = 1; i < 20; i++) {
        console.log('loop ', i);
        log.call(this, 'throttle function running ', i);
        await sleep(100);
    }
}).call({ a: 1 });