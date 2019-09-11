import Base from './base';

class QuickSort extends Base {
    constructor(array, compare, maxLengthInsertSort = 7) {
        super(array, compare);

        this.maxLengthInsertSort = maxLengthInsertSort;
    }

    sort() {
        if (!this.array || this.array.length < 2) return this.array;

        const { length } = this.array;
        this._qSort(0, length - 1);
        return this.array;
    }

    _qSort(start, end) {
        if (end - start <= this.maxLengthInsertSort) {
            // 插入排序
            for (let i = start + 1; i <= end; i++) {
                const temp = this.array[i];
                let j;
                for (j = i - 1; j >= start && this.compare(this.array[j], temp) > 0; j--) {
                    this.array[j + 1] = this.array[j];
                }
                this.array[j + 1] = temp;
            }
            return;
        }

        if (start < end) {
            const [p1, p2] = this._partition(start, end);
            this._qSort(start, p1 - 1);
            this._qSort(p2 + 1, end);
        }
    }

    _partition(start, end) {
        // 三数取中
        const mid = Math.floor((start + end) / 2);
        if (this.shouldSwap(mid, end)) {
            this.swap(mid, mid);
        }
        if (this.shouldSwap(start, end)) {
            this.swap(start, end);
        }
        if (this.shouldSwap(mid, start)) {
            this.swap(mid, start);
        }

        // 三路快排
        let cur = start + 1;
        const pivotVal = this.array[start];
        while (cur <= end) {
            if (this.compare(pivotVal, this.array[cur]) === 0) {
                cur++;
            } else if (this.compare(pivotVal, this.array[cur]) > 0) {
                this.swap(start, cur);
                start++;
                cur++;
            } else {
                this.swap(cur, end);
                end--;
            }
        }
        return [start, end];
    }
}

export default QuickSort;