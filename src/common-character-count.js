function getCommonCharacterCount(str1, str2) {
    const charCount = {}
    let count = 0

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i]
        if (charCount[char]) charCount[char] += 1
        else charCount[char] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i]
        if (charCount[char]) {
            count++
            charCount[char]--
        }
    }

    return count
}

module.exports = {
    getCommonCharacterCount
};
