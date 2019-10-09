import Base from './base';

class ShellSort extends Base {
    constructor(array, compare, step = 2) {
        super(array, compare, step);
        this.step = step;
    }

    validate(...args) {
        super.validate(...args);
        const [array, , step] = args;
        if (!Number.isInteger(step) || step < 2 || step > array.length) throw new Error('step is not a correct value');
    }

    sort() {
        if (this.array.length < 2) return this.array;

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