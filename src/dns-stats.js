function getDNSStats(domains) {
  let result = {}
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i]
    let parts = domain.split('.').reverse()
    let prev = ''
    for (let j = 0; j < parts.length; j++) {
      let key = '.' + prev + parts[j]
      result[key] = result[key] ? result[key] + 1 : 1
      prev += parts[j] + '.'
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
