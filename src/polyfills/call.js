import { isEmpty, isNode } from './utils';

export const call = Symbol('call');

Function.prototype[call] = function (context, ...args) {
    if (isEmpty(context)) {
        context = isNode ? global : window;
    } else {
        context = Object(context);
    }
    const key = Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
};

var name = 'origin name';

const obj = {
    name: 'call name'
};

const test = function () {
    console.log(this.name);
};

test[call](obj);

