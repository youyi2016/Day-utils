 /**
  * 设置光标位置到文本最后
  * @param {*} ele 
  */
 import setCursorRange from './setCursorRange'

 function setCursorPosition(ele) {
   let len = ele.value.length
   setCursorRange(ele, len, len)
 }

 export default setCursorPosition