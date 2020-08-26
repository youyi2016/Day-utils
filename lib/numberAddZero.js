function addZero(value) {
  if (typeof value !== 'number') {
    console.log('不是一个数')
    return
  }
  value += ''
  return value.slice(-2, -1) === '' ? '0' + value : value
}

export default addZero