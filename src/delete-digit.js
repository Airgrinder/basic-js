function deleteDigit(n) {
    let maxNumber = 0
    const stringNumber = n.toString()
    for (let i = 0; i < stringNumber.length; i++) {
        const newNumber = parseInt(stringNumber.slice(0, i) + stringNumber.slice(i + 1))
        if (newNumber > maxNumber) maxNumber = newNumber
    }
    return maxNumber
}

module.exports = {
    deleteDigit
};
