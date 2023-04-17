function isMAC48Address(inputString) {
  const groups = inputString.split("-")
  if (groups.length !== 6) return false
  const regExp = /^([0-9A-Fa-f]{2})$/
  for (let group of groups) if (!regExp.test(group)) return false
  return true
}

module.exports = {
  isMAC48Address
};
