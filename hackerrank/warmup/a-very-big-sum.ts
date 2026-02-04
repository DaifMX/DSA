// JS autohandles longs.
function aVeryBigSum(ar: number[]): number {
    // Write your code here
    let counter = 0;
    
    ar.forEach((num: number) => {
        counter += num;     
    });
    
    return counter;
};