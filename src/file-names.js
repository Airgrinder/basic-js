function renameFiles(names) {
  const nameCounts = {}
  const result = []

  for (let name of names) {
    if (nameCounts[name]) {
      const newName = `${name}(${nameCounts[name]})`
      result.push(newName)
      nameCounts[newName] = 1
      nameCounts[name]++
    } else {
      result.push(name)
      nameCounts[name] = 1
    }
  }

  return result
}


module.exports = {
  renameFiles
};
