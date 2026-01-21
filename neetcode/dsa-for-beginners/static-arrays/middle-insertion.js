function middleInsertion(val, arr, idx) {
    for (let i = arr.length - 1; i >= idx; i--) {
        arr[i + 1] = arr[i];
    }

    arr[idx] = val;

    return arr;
};


const test = middleInsertion(3, [1,2,4,5], 2);
console.log(test);