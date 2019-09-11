import Base from './base';

class InsertSort extends Base {
    sort() {
        if (!this.array || this.array.length < 2) return this.array;

        const { length } = this.array;
        for (let i = 1; i < length; i++) {
            const temp = this.array[i];
            let j;
            for (j = i - 1; j >= 0 && this.compare(this.array[j], temp) > 0; j--) {
                this.array[j + 1] = this.array[j];
            }
            this.array[j + 1] = temp;
        }
        return this.array;
    }
}

export default InsertSort;