import Base from './base';

class MergeSort extends Base {
    sort() {
        if (this.array.length < 2) return this.array;

        const { length } = this.array;
        return this._sort(this.array, this.array, 0, length - 1)
    }

    _sort(origin, result, front, end) {
        const arr = [];
        if (front === end) {
            result[front] = origin[front];
        } else {
            const mid = Math.floor((front + end) / 2);
            this._sort(origin, arr, front, mid);
            this._sort(origin, arr, mid + 1, end);
            this._merge(arr, result, front, mid, end);
        }
        return result;
    }

    _merge(origin, result, front, mid, end) {
        let i, j;
        for (i = front, j = mid + 1; front <= mid && j <= end; i++) {
            if (this.compare(origin[front], origin[j]) > 0) {
                result[i] = origin[j++];
            } else {
                result[i] = origin[front++];
            }
        }
        while (front <= mid) {
            result[i++] = origin[front++];
        }
        while (j <= end) {
            result[i++] = origin[j++];
        }
    }
}

export default MergeSort;