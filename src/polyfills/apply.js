import { isNode, isArrayLike, isEmpty } from './utils';

const apply = Symbol['apply'];

Function.prototype[apply] = function (context, args = []) {
    if (!isArrayLike(args)) {
        throw new Error('unexpected argument');
    }
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
    name: 'apply name'
};

const test = function () {
    console.log(this.name);
};

test[apply](obj);