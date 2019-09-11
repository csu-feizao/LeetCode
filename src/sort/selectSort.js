import Base from './base';

class SelectSort extends Base {
    sort() {
        if (!this.array || this.array.length < 2) return this.array;

        const { length } = this.array;
        for (let i = 0; i < length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < length; j++) {
                if (this.shouldSwap(min, j)) {
                    min = j;
                }
            }
            if (min !== i) {
                this.swap(min, i);
            }
        }
        return this.array;
    }
}

export default SelectSort;