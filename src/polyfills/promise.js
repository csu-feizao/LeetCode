const PENDING = Symbol('PENDING');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('REJECTED');

const noop = () => {};

class Promise {
    static resolve(obj) {
        if (obj instanceof Promise) return obj;

        return new Promise(resolve => {
            resolve(obj);
        });
    }

    static reject(reason) {
        return new Promise((_, reject) => {
            reject(reason);
        });
    }

    static all(entries) {
        return new Promise((resolve, reject) => {
            let left = entries.length;
            const result = [];
            entries.forEach(entry => {
                entry.then(val => {
                    left--;
                    result.push(val);
                    if (left === 0) {
                        resolve(result);
                    }
                }, err => {
                    reject(err);
                });
            });
        });
    }

    static race(entries) {
        return new Promise((resolve, reject) => {
            entries.forEach(entry => {
                entry.then(val => {
                    resolve(val);
                }, err => {
                    reject(err);
                });
            });
        });
    }

    constructor(resolver) {
        this.fulfilledQueue = [];
        this.rejectedQueue = [];
        this._status = PENDING;
        this._result = null;

        const handleFulfilledQueue = () => {
            while (this.fulfilledQueue.length) {
                let resolve = this.fulfilledQueue.shift();
                resolve(this._result);
            }
        };

        const handleRejectedQueue = () => {
            while (this.rejectedQueue.length) {
                let reject = this.rejectedQueue.shift();
                reject(this._result);
            }
        };

        const _resolve = obj => {
            const fn = () => {
                if (this._status !== PENDING) return;

                if (obj instanceof Promise) {
                    obj.then(res => {
                        this._status = FULFILLED;
                        this._result = res;
                        handleFulfilledQueue();
                    }, err => {
                        this._status = REJECTED;
                        this._result = err;
                        handleRejectedQueue();
                    });
                } else {
                    this._status = FULFILLED;
                    this._result = obj;
                    handleFulfilledQueue();
                }
            };

            setTimeout(fn, 0);
        };

        const _reject = obj => {
            const fn = () => {
                if (this._status !== PENDING) return;

                this._status = REJECTED;
                this._result = obj;
                handleRejectedQueue();
            };

            setTimeout(fn, 0);
        };

        try {
            resolver(_resolve, _reject);
        } catch (e) {
            return _reject(e);
        }
    }

    then(successFn, failFn) {
        return new Promise((resolve, reject) => {
            const handleSuccess = fn => {
                if (typeof fn === 'function') {
                    let res;
                    try {
                        res = fn(this._result);
                    } catch(e) {
                        reject(e);
                    }
                    if (res instanceof Promise) {
                        res.then(resolve, reject);
                    } else {
                        resolve(res);
                    }
                } else {
                    resolve(this._result);
                }
            };

            const handleFail = fn => {
                if (typeof fn === 'function') {
                    let res;
                    try {
                        res = fn(this._result);
                    } catch(e) {
                        reject(e);
                    }
                    if (res instanceof Promise) {
                        res.then(resolve, reject);
                    } else {
                        reject(res);
                    }
                } else {
                    reject(this._result);
                }
            };

            switch (this._status) {
                case PENDING:
                    this.fulfilledQueue.push(() => {
                        handleSuccess(successFn);
                    });
                    this.rejectedQueue.push(() => {
                        handleFail(failFn);
                    });
                    break;
                case FULFILLED:
                    handleSuccess(successFn);
                    break;
                case REJECTED:
                    handleFail(failFn);
                    break;
                default:
                    console.log('Promise error status: ', this._status);
                    break;
            }
        });
    }

    catch(reject) {
        return this.then(null, reject);
    }

    finally(finalFn) {
        return this.then(finalFn, finalFn);
    }
}
