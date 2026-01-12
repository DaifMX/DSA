class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const logs = [];
        const n = numbers.length;

        let left = 0
        let right = n - 1;
        let op = numbers[left] + numbers[right];

        while (true) {
            op = numbers[left] + numbers[right];

            if (op === target) {
                return [left + 1, right + 1];
            
            } else if (op > target) {
                right--;
                continue;

            } else {
                left++;
                continue;
            }
        }
    }
}