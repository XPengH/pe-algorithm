/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let normalStr = s.split('') // 原始字符串
  let strLength = s.length
  let start = 0
  let end = 0
  let str = normalStr[0]
  let finalStr = normalStr[0]
  do {
    // let leftStr  = normalStr.split(normalStr[start+1])
    if (normalStr[start+1] && !str.includes(normalStr[start+1])) {
      let middleStr = str + normalStr[start+1]
      start += 1
      if (str.length < middleStr.length) {
        str = middleStr
      }
    } else if(normalStr[start+1]) {
      normalStr.splice(0, 1)
      if (finalStr.length < str.length) {
        finalStr = str
      }
      str = normalStr[0]
      start = 0
    } else {
      if (finalStr.length < str.length) {
        finalStr = str
      }
      normalStr = []
    }
  } while (start < normalStr.length)
  return finalStr
};
console.log(lengthOfLongestSubstring('dvdf'))