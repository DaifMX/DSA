// String and Patter Matching - Easy

function isAlphabeticPalindrome(code) {
    code = code.toLowerCase();
    let str = '';
     
    for (let i = 0; i < code.length; i++) {
        const charAscii = code.charCodeAt(i);
        if (charAscii >= 97 && charAscii <= 122) str += code[i];
    }
    
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return str === reversedStr;
}