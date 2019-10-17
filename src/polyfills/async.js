function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function () {
        var self = this, args = arguments;
        return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

function logFetch(_x) {
    return _logFetch.apply(this, arguments);
}

function _logFetch() {
    _logFetch = _asyncToGenerator(function* (url) {
        try {
            const response = yield fetch(url);
            console.log((yield response.text()));
        } catch (err) {
            console.log('fetch failed', err);
        }
    });
    return _logFetch.apply(this, arguments);
}

const asyncToGenerator = function (generator) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const it = generator.apply(this, args);
            const step = function (gen, key, value) {
                let next;
                try {
                    next = gen[key](value);
                } catch (e) {
                    reject(e);
                    return;
                }
                if (next.done) {
                    resolve(next.value);
                    return;
                }
                Promise.resolve(next.value).then(value => {
                    step(gen, 'next', value)
                }, err => {
                    step(gen, 'throw', err);
                });
            };
            step(it, 'next');
        })
    }
};

const sleep = (time, ...args) => new Promise(resolve => {
    setTimeout(resolve, time, ...args);
});

const print = function* (time, ...args) {
    yield sleep(time);
    console.log(...args);
};

const printMore = function* (...args) {
    for (let i = 0; i < 10; i++) {
        yield* print(i * 100, ...args, ` count: ${i}`);
    }
};

const testAsync1 = asyncToGenerator(printMore);
const testAsync2 = _asyncToGenerator(printMore);
const testAsync3 = asyncToGenerator(function* () {
    yield sleep(6000);
    yield Promise.resolve('resolve');
    return 'resolve';
});
testAsync3().then(value => {
    console.log(value);
}, reason => {
    console.log(reason);
});
testAsync1('test 1');
testAsync2('test 2');