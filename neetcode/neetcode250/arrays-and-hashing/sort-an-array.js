class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    mergeSort(nums) {
        if (nums.length <= 1) return nums;

        const leftArr = [];
        const rightArr = [];

        const middle = Math.trunc(nums.length / 2);

        for (let i = 0; i < nums.length; i++) {
            if (i < middle) {
                leftArr.push(nums[i]);
            } else {
                rightArr.push(nums[i]);
            }
        }

        this.mergeSort(leftArr);
        this.mergeSort(rightArr);
        this.merge(nums, leftArr, rightArr);
        return nums;
    }

    merge(arr, leftArr, rightArr) {
        let i = 0;
        let l = 0;
        let r = 0;

        while (l < leftArr.length && r < rightArr.length) {
            if (leftArr[l] < rightArr[r]) {
                arr[i] = leftArr[l];
                l++;
            } else {
                arr[i] = rightArr[r];
                r++;
            }
            i++;
        }

        while (l < leftArr.length) {
            arr[i] = leftArr[l];
            l++;
            i++;
        }

        while (r < rightArr.length) {
            arr[i] = rightArr[r];
            r++;
            i++;
        }
    }

    sortArray(nums) {
        return this.mergeSort(nums);
    }
}
