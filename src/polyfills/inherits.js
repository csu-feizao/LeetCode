const inherits = (Child, Parent) => {
    const F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
};


const inherits1 = (Child, Parent) => {
    function New(constructor, ...args) {
        const obj = {};
        obj.__proto__ = Parent.prototype;
        const ret = constructor.apply(this, args);
        return ret instanceof Object ? ret : obj;
    }
    const F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = New(F);
    Child.prototype.constructor = Child;
};

const inherits2 = (Child, Parent) => {
    Child.prototype = {};
    Child.prototype.__proto__ = Parent.prototype;
    Child.prototype.constructor = Child;
    return Child;
};

const inherits3 = (Child, Parent) => {
    function New(constructor, ...args) {
        const obj = Object.create(constructor.prototype);
        const ret = constructor.apply(this, args);
        return ret instanceof Object ? ret : obj;
    }
    const F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = New(F);
    Child.prototype.constructor = Child;
};

const inherits4 = (Child, Parent) => {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    return Child;
};


function Parent() {}

function Child() {
    Parent.call(this);
}

inherits4(Child, Parent);
console.log((new Child()) instanceof Parent)