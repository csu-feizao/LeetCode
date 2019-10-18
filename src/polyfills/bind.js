import { isEmpty, isNode } from './utils';
import { call } from './call';

const bind = Symbol['bind'];

// 此方案有内存泄漏风险
Function.prototype[bind] = function (context, ...preArgs) {
    if (isEmpty(context)) {
        context = isNode ? global : window;
    } else {
        context = Object(context);
    }
    const key = Symbol();
    context[key] = this;
    const bindFunc = function (...args) {
        if (this instanceof bindFunc) {
            return new context[key](...preArgs, ...args);
        }
        return context[key](...preArgs, ...args);
    };
    if (this.prototype) {
        bindFunc.prototype = Object.create(this.prototype);
    }
    return bindFunc;
};

const bind1 = Symbol('bind');
Function.prototype[bind1] = function (context, ...preArgs) {
    const thisFn = this;
    const bindFunc = function (...args) {
        return thisFn[call](context, ...preArgs, ...args);
    };
    if (thisFn.prototype) {
        bindFunc.prototype = Object.create(thisFn.prototype);
    }
    return bindFunc;
};

function f(name, age) {
   console.log(this.sex, name, age);
}

const man = {
    sex: 'male'
};
const woman = {
    sex: 'female'
};

const manF = f[bind1](man);
manF('peter', 20);
const susanF = f[bind1](woman, 'susan');
susanF(18);
const susanToManF = susanF[bind1](man);
susanToManF(18);
