class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash_S = {};
        const hash_T = {};

        if (s.length != t.length) return false;

        for (let i = 0; i < s.length; i++) {
            if (hash_S[s[i]] === undefined) hash_S[s[i]] = 1;
            else hash_S[s[i]] = hash_S[s[i]] + 1;
        }

        for (let j = 0; j < t.length; j++) {
            if (hash_T[t[j]] === undefined) hash_T[t[j]] = 1;
            else hash_T[t[j]] = hash_T[t[j]] + 1;
        }

        for (const key in hash_S) {
            const value = hash_T[key];

            if (value === undefined) return false;

            if (value != hash_S[key]) return false
        }

        return true;
    }
}

const s = new Solution().isAnagram("car", "cat")
console.log(s);