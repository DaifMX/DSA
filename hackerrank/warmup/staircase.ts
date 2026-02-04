function staircase(n: number): void {
    // Write your code here
    const hashStr = '#';
    const spaceStr = ' ';
    for (let i = 0; i < n; i++) {
        const spaces = n - i - 1;
        const hashes = n - spaces;
        
        let res = "";        
        res = res.concat(spaceStr.repeat(spaces));
        res = res.concat(hashStr.repeat(hashes));
        console.log(res);
    }
}
