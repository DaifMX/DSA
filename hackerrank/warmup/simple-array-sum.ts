function simpleArraySum(ar: number[]): number {
    // Write your code here
    let acum = 0;
    ar.forEach((num: number) => {
        acum += num;
    })
    
    return acum;
}