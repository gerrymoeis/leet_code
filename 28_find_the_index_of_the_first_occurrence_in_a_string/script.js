/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length <= 0) {
    return -1
  }
  for (let i=0; i < haystack.length; i++) {
    s = haystack.slice(i, i + needle.length)
    if (s === needle) {
      return haystack.indexOf(s)
    }
  }
  return -1
};

const haystack = "sadsadbutsas"
const needle = ""
console.log(strStr(haystack, needle))