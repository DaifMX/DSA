// Strings and Pattern Matching - Medium

function maxDistinctSubstringLengthInSessions(sessionString) {
    let maxLen = 0;
    let acum = 0;

    let currStr = [];

    for (let i = 0; i < sessionString.length; i++) {
        const char = sessionString[i];
        acum++;

        if (char === '*') {
            acum = 0;
            currStr = [];
            continue;
        }

        while (currStr.includes(char)) {
            currStr.shift();
            acum--
        }

        currStr.push(char);

        maxLen = Math.max(maxLen, acum);
    }

    return maxLen;
}

console.log(maxDistinctSubstringLengthInSessions('abc*abcbb'))