import addZero from './numberAddZero'

function formatDate(date) {
  const obj = new Date(date)
  const year = obj.getFullYear(),
    month = addZero(obj.getMonth() + 1),
    day = addZero(obj.getDate()),
    hour = addZero(obj.getHours()),
    min = addZero(obj.getMinutes()),
    sec = addZero(obj.getSeconds())

  return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

export default formatDate