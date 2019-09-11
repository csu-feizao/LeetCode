class PriorityQueue {
    constructor(array = [], compare = (a, b) => a - b) {
        this.array = array;
        this.compare = compare;

        this.init();
    }

    init() {
        const { length } = this.array;
        if (length < 2) return;

        for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
            this.siftDown(i, length - 1);
        }
    }

    getArray() {
        return this.array;
    }

    add(value) {
        this.array.push(value);
        this.siftUp(this.size() - 1, 0);
    }

    poll() {
        if (this.empty()) return null;
        const top = this.array[0];
        this.array[0] = this.array[this.size() - 1];
        this.array.pop();
        this.siftDown(0, this.size() - 1);
        return top;
    }

    empty() {
        return !this.array.length;
    }

    top() {
        if (this.empty()) return null;
        return this.array[0];
    }

    size() {
        return this.array.length;
    }

    siftUp(index, start) {
        if (this.empty()) return;

        const val = this.array[index];
        let parent = Math.floor((index + 1) / 2) - 1;
        while (parent >= start) {
            if (this.compare(this.array[parent], val) <= 0) break;

            this.array[index] = this.array[parent];
            index = parent;
            parent = Math.floor((index + 1) / 2) - 1;
        }
        this.array[index] = val;
    }

    siftDown(index, end) {
        if (this.empty()) return;

        const val = this.array[index];
        let child = 2 * (index + 1) - 1;
        while (child <= end) {
            if (child < end && this.compare(this.array[child], this.array[child + 1]) > 0) {
                child++;
            }
            if (this.compare(val, this.array[child]) <= 0) break;

            this.array[index] = this.array[child];
            index = child;
            child = 2 * (index + 1) - 1;
        }
        this.array[index] = val;
    }
}

export default PriorityQueue;
