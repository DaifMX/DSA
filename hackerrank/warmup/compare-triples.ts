function compareTriplets(a: number[], b: number[]): number[] {
    const res: number[] = [0,0];
    
    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            res[1]++;
        } else if (a[i] > b[i]) {
            res[0]++;
        }
    }
    
    return res;
};