const getSingle = (fn) => {
    let ret;
    return function (...args) {
        return ret || (ret = fn.apply(this, args));
    };
};

const getSingleClass = (Constructor) => {
    let instance;
    return function (...args) {
        return instance || (instance = new Constructor(...args));
    };
};


const Person = function (name) {
    this.name = name;
};
const ProxySingletonPerson = getSingleClass(Person);
console.log(new ProxySingletonPerson('A') === new ProxySingletonPerson('B'));

const createLoginLayer = function () {
    let div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};
const createSingleLayer = getSingle(createLoginLayer);

const createSingleFrame = getSingle(() => {
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    return iframe;
});

const bindEventOnce = getSingle((id) => {
    document.getElementById(id).onclick = function () {
        console.log('click');
    };
    return id;
});