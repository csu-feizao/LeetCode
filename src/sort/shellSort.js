import Base from './base';

class ShellSort extends Base {
    constructor(array, compare, step = 2) {
        super(array, compare);
        this.step = step;
    }

    sort() {
        if (!this.array || this.array.length < 2) return this.array;

        const { length } = this.array;
        for (let group = Math.floor(length / this.step); group > 0; group = Math.floor(group / this.step)) {
            for (let i = group; i < length; i++) {
                const temp = this.array[i];
                let j;
                for (j = i - group; j >= 0 && this.compare(this.array[j], temp) > 0; j -= group) {
                    this.array[j + group] = this.array[j];
                }
                this.array[j + group] = temp;
            }
        }
        return this.array;
    }
}

export default ShellSort;