import Base from './base';

class HeapSort extends Base {
    constructor(array, compare = (a, b) => a - b) {
        super(array, (a, b) => compare(b, a));

        this.initHeap();
    }

    sort() {
        if (this.array.length < 2) return this.array;
        const { length } = this.array;
        for (let i = length - 1; i > 0; i--) {
            this.swap(0, i);
            this.down(0, i - 1);
        }
        return this.array;
    }

    initHeap() {
        const { length } = this.array;
        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
            this.down(i, length - 1);
        }
        return this.array;
    }

    empty() {
        return !this.array.length;
    }

    size() {
        return this.array.length;
    }

    top() {
        if (this.empty()) return;
        return this.array[0];
    }

    push(value) {
        this.array.push(value);
        this.up(this.size() - 1, 0);
    }

    pop() {
        if (this.empty()) return;
        const value = this.array[0];
        this.array[0] = this.array[this.size() - 1];
        this.array.pop();
        this.down(0, this.size() - 1);
        return value;
    }

    up(index, start) {
        const temp = this.array[index];
        let parent = Math.floor((index + 1) / 2) - 1;
        while (parent >= start) {
            if (this.compare(this.array[parent], temp) <= 0) break;
            this.array[index] = this.array[parent];
            index = parent;
            parent = Math.floor((parent + 1) / 2) - 1
        }
        this.array[index] = temp;
    }

    down(index, end) {
        const temp = this.array[index];
        let child = (index + 1) * 2 - 1;
        while (child <= end) {
            if (child < end && this.shouldSwap(child, child + 1)) {
                child++;
            }
            if (this.compare(temp, this.array[child]) <= 0) break;
            this.array[index] = this.array[child];
            index = child;
            child = (child + 1) * 2 - 1;
        }
        this.array[index] = temp;
    }
}

export default HeapSort;