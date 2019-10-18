import { isEmpty, isNode } from './utils';

const bind = Symbol['bind'];

Function.prototype[bind] = function (context, ...preArgs) {
    if (isEmpty(context)) {
        context = isNode ? global : window;
    } else {
        context = Object(context);
    }
    const key = Symbol();
    context[key] = this;
    return function bindFunc(...args) {
        if (this instanceof bindFunc) {
            return new context[key](...preArgs, ...args);
        }
        return context[key](...preArgs, ...args);
    }
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

const manF = f[bind](man);
manF('peter', 20);
const susanF = f[bind](woman, 'susan');
susanF(18);
const susanToManF = susanF[bind](man);
susanToManF(18);
