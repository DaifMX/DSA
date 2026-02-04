function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    const map: Record<number, number> = {};
    
    let maxVal: number = -Infinity;
    
    candles.forEach((val: number) => {
       if (map[val] == undefined) map[val] = 1;
       else map[val]++; 
        maxVal = Math.max(maxVal, val);
    });
    
    return map[maxVal];
};