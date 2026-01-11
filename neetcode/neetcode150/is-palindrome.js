class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric = (char) => {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    };

    isPalindrome(s) {
        let parsedStr = ''; let newStr = '';

        // El problema dice que es indiferente en cuanto a si el char es upper o lower case.
        s = s.toLowerCase();
        s = s.replaceAll(' ', '');

        for (let i = 0; i < s.length; i++) {
            if (this.isAlphanumeric(s[i])) parsedStr += s[i];
        }

        for (let i = parsedStr.length - 1; i >= 0; i--) {
            newStr += parsedStr[i];
        }

        if (parsedStr == newStr) return true;

        return false;
    };
}

const s = new Solution().isPalindrome('Was it a car or a cat I saw?');
console.log(s)