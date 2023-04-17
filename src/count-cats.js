function countCats(matrix) {
  let catsFound = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        catsFound++
      }
    }
  }

  return catsFound
}


module.exports = {
  countCats
};
