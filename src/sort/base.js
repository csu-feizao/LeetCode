class Base {
    constructor(array = [], compare = (a, b) => a - b) {
        this.array = array;
        this.compare = compare;
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