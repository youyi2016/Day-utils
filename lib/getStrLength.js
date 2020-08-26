/**
 * 获取字符串总长度 中文2个字节 非中文1个字节计算
 * @param {*} strTemp 
 */
function getStrLength(strTemp) {
  let i, sum
  sum = 0
  for (i = 0; i < strTemp.length; i++) {
    if (strTemp.charCodeAt(i) >= 0 && strTemp.charCodeAt(i) <= 255) {
      sum = sum + 1
    } else {
      sum = sum + 2
    }
  }
  return sum
}

export default getStrLength