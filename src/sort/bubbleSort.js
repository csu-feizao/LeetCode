import Base from './base';

class BubbleSort extends Base {
    sort() {
        if (this.array.length < 2) return this.array;

        const { length } = this.array;
        let isChange = true;
        for (let i = 0; i < length - 1 && isChange; i++) {
            isChange = false;
            for (let j = length - 1; j > i; j--) {
                if (this.shouldSwap(j - 1, j)) {
                    this.swap(j - 1, j);
                    isChange = true;
                }
            }
        }
        return this.array;
    }
}

export default BubbleSort;