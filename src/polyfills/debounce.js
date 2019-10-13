const debounce = (fn, time) => {
    let timeout;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn.bind(this, ...args), time);
    }
};


const sleep = (time) => new Promise(resolve => {
    setTimeout(() => {
        resolve();
        console.log('sleep ', time);
    }, time);
});
const log = debounce(console.log, 250);
(async function () {
    for (let i = 1; i < 5; i++) {
        const time = i * 100;
        console.log('loop ', i);
        log.call(this, 'debounce function running ', time);
        await sleep(time);
    }
}).call({ a: 1 });