function miniMaxSum(arr: number[]): void {
    // Write your code here
    arr = arr.sort((a, b) => a - b);
    
    let min = 0;
    let max = 0;
        
    arr.forEach((num: number) => {
       min += num; 
    });
    
    max = min;
    
    min -= arr[arr.length -1];
    max -= arr[0];
     
    console.log(min, max);
}