/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    mergeSortImp(arr, leftArr, rightArr) {
        let i = 0;
        let l = 0;
        let r = 0;

        while (l < leftArr.length && r < rightArr.length) {
            if (leftArr[l].key <= rightArr[r].key) {
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

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        // This will recursivly separte in two subarrays all of the array of pairs
        const len = pairs.length;

        if (len <= 1) return pairs; // Cover base case

        const middle = Math.trunc(len / 2); // Calculate the middle point where the right array will begin.

        const leftArr = new Array();
        const rightArr = new Array();

        for (let i = 0; i < len; i++) {
            if (i < middle) {
                leftArr.push(pairs[i]);
            } else {
                rightArr.push(pairs[i])
            }
        }

        this.mergeSort(leftArr);
        this.mergeSort(rightArr);
        this.mergeSortImp(pairs, leftArr, rightArr);
        return pairs;
    }
}
