var romanToInt = function (s) {
    let result = 0;

    const vals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    const exVals = [4, 9, 40, 90, 400, 900];

    for (let i = 0; i < s.length; i++) {
        const currStr = s[i];
        const currVal = vals[`${currStr}`];

        if (i == 0){
            result += currVal;
            continue;
        }

        const lastStr = s[i -1];
        const lastVal = vals[`${lastStr}`];

        if (exVals.includes(currVal - lastVal)) {
            result = (result - lastVal) + (currVal - lastVal);
            continue;
        }

        result += currVal;
    }

    return result;
};