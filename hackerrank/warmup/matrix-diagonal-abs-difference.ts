function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let slashDiag = 0 // "/"
    let reverseSlashDiag = 0 // "\"
    
    let i = 0;
    let j = 0;
    
    // REVERSE SLASH \ (+)
    while (i < arr.length) {
        reverseSlashDiag += arr[i][j];
        i++;
        j++;
    }
    
    i = 0;
    j = arr[0].length - 1;
    
    // NORMAL SLASH / (-)
    while (i < arr.length) {
        slashDiag += arr[i][j];
        i++;
        j--;
    }
    
    return Math.abs(reverseSlashDiag - slashDiag);
}