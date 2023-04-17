function encodeLine( str ) {
  if (str === '') return ''
  let s = str.replaceAll(/1/ig, '')
  let result = ''
  let count = 1
  let targetChar = s[0]
  for (let i = 1; i < s.length; i++) {
    if (targetChar === s[i]) count++
    else {
      result += count + targetChar
      count = 1
      targetChar = s[i]
    }
  }
  result += count + targetChar
  return result.replaceAll(/1/ig, '')
}

module.exports = {
  encodeLine
};
