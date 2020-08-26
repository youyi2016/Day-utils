/**
 * 返回变量类型（统一了所有的变量类型的返回值类型）
 * @param {*} obj 
 * @returns {string} 返回类型为字符串返回的值可能为boolean/number/string/function/array/date/regExp/object/error/null/undefined
 */
function type(obj) {
  let typeMaps = {}
  'Boolean Number String Function Array Date RegExp Object Error'
  .split(' ')
    .map(item => {
      typeMaps['[object ' + item + ']'] = item.toLowerCase()
    })

  if (obj == null) {
    //undefined == null为true；'' == null 为false；
    return obj + ''
  }
  return typeof obj === 'object' || typeof obj === 'function' ?
    typeMaps[Object.prototype.toString.call(obj)] || Object :
    typeof obj
}

export default type