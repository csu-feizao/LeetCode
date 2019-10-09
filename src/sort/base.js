class Base {
    constructor(...args) {
        this.validate(...args);

        const [array = [], compare = (a, b) => a - b] = args;
        this.array = array;
        this.compare = compare;
    }

    validate(array) {
        if (!Array.isArray(array)) throw new Error('The first argument should be an [Array]');
    }

    shouldSwap(a, b) {
        return this.compare(this.array[a], this.array[b]) > 0;
    }

    swap(a, b) {
        [this.array[a], this.array[b]] = [this.array[b], this.array[a]];
    }

    sort () {
        return this.array;
    }
}

export default Base;