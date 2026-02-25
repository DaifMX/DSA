class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const len = s2.length;

        if (s1.length > len) return false;

        let l = 0;
        let r = s1.length - 1;

        // Create expected result
        const expected = Array.from({ length: 26 }, () => 0);
        for (let i = 0; i < s1.length; i++) {
            const idx = s1.charCodeAt(i) - 'a'.charCodeAt(0);
            expected[idx]++;
        }

        // Create result of first iteration.
        const ctr = Array.from({ length: 26 }, () => 0);
        for (let i = 0; i < s1.length; i++) {
            const idx = s2.charCodeAt(i) - 'a'.charCodeAt(0);
            ctr[idx]++;
        }

        // Count matches between the two arrays.
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (expected[i] === ctr[i]) matches++;
        };

        // If we haven't reach the end of string.
        while (r < s2.length) {
            if (matches === 26) return true;

            r++; // Update r
            if (r >= s2.length) break;
            
            const newIdx = s2.charCodeAt(r) - 'a'.charCodeAt(0); // Get index of new letter
            if (ctr[newIdx] === expected[newIdx]) matches--;
            ctr[newIdx]++; // Update counter of the pushed letter
            if (ctr[newIdx] === expected[newIdx]) matches++;

            const oldIdx = s2.charCodeAt(l) - 'a'.charCodeAt(0); // Get index of the removed letter
            if (ctr[oldIdx] === expected[oldIdx]) matches--;
            ctr[oldIdx]--; // Update counter for the removed letter
            if (ctr[oldIdx] === expected[oldIdx]) matches++;

            l++; // Update l
        }

        return false;
    }
}