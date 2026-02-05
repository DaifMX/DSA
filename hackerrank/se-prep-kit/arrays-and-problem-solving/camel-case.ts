function isUpper (char: string) {
    return char === char.toUpperCase();
};

function camelcase(s: string): number {
    // Write your code here
    let counter = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (isUpper(s[i])) counter++;
    }
    
    return counter;
};