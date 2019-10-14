const Event = function () {
    const _default = 'default';
    const fns = ['listen', 'trigger', 'remove'];
    const _namespaceCache = {};
    const create = function (namespace = _default) {
        const getSingle = function (fn) {
            return function (...args) {
                if (!_namespaceCache[namespace]) {
                    _namespaceCache[namespace] = fn.apply(this, args);
                }
                return _namespaceCache[namespace];
            };
        };
        const _create = function () {
            const cache = {};
            return {
                listen: function (key, fn) {
                    if (!cache[key]) {
                        cache[key] = [];
                    }
                    cache[key].push(fn);
                },
                trigger: function (key, ...args) {
                    if (!cache[key]) return;
                    cache[key].forEach(fn => {
                        fn.apply(this, args);
                    });
                },
                remove: function (key, fn) {
                    if (cache[key]) {
                        if (fn) {
                            cache[key] = cache[key].filter(val => val !== fn);
                        } else {
                            cache[key] = [];
                        }
                    }
                }
            };
        };
        const singleCreate = getSingle(_create);
        return singleCreate.call(this);
    };

    const ret = { create };
    fns.forEach(value => {
        ret[value] = function (...args) {
            const event = this.create();
            event[value](...args);
        };
    });
    return ret;
}();



Event.listen('a', function () {
    console.log('a');
});
const callback = function () {
    console.log('callback');
};
Event.listen('a', callback);
Event.create('cc').listen('a', function () {
    console.log('cc: ', 'a');
});

Event.create('cc').listen('b', function () {
    console.log('cc: ', 'b');
});
Event.create('cc').listen('b', function () {
    console.log('cc: ', 'b1');
});


Event.trigger('a');
Event.create('cc').trigger('a');
Event.remove('a', callback);
Event.trigger('a');

Event.create('cc').trigger('b');
Event.create('cc').remove('b');
Event.create('cc').trigger('b');