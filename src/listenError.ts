/**
 * 监听错误
 */

// 监听回调列表
const listenList = []
function callError(msg) {
  listenList.forEach(fn => {
    try {
      fn(msg)
    } catch (e) {
    }
  })
}
/**
 * @param {String}  errorMessage   错误信息
 * @param {String}  scriptURI      出错的文件
 * @param {Number}    lineNumber     出错代码的行号
 * @param {Number}    columnNumber   出错代码的列号
 * @param {Object}  errorObj       错误的详细信息，Anything
 */
window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
//  callError(errorMessage)
}

window.addEventListener('error', function (e) {
  callError(e)
}, true)

export function addListenError(fn) {
  listenList.push(fn)
}
