/**
 * Pair class to store key-value pairs
 */
class Pair {
    /**
     * @param {number} key The key to be stored in the pair
     * @param {string} value The value to be stored in the pair
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(p) {
        const res = [];

        for (let i = 0; i < p.length; i++) {
            let k = i - 1;

            while(k >= 0 && p[k + 1].key < p[k].key) {
                const prev = p[k];

                p[k] = p[k + 1];    
                p[k + 1] = prev;
                
                k--;
            }

            res.push(new Array(...p));
        }

        return res;
    }  
}



const s = new Solution();
const pairs = [new Pair(3, "apple"), new Pair(3, "banana"), new Pair(2, "cherry")];
console.log(s.insertionSort(pairs));
