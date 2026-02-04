function plusMinus(arr: number[]): void {
    // Write your code here
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;

    arr.forEach((num: number) => {
        if (num === 0) zeroCount++;
        else if (num < 0) negCount++;
        else posCount++;
    });

    const posRatio = posCount / arr.length;
    const negRatio = negCount / arr.length;
    const zeroRatio = zeroCount / arr.length;

    console.log(posRatio);
    console.log(negRatio);
    console.log(zeroRatio);
};