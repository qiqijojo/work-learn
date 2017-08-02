/**
 * Created by lenovo on 2017/3/17.
 */

export const changeShowCode = ({commit}, {showCode, userName}) => {
  commit('CHANGE_SHOW_CODE', showCode)
  commit('CHANGE_SHOWCODE_USERNAME', userName)
  return true
}
/**
 * 修改页面title
 */
export const setPageTitle = ({commit}, title) => {
  // 以下代码可以解决以上问题，不依赖jq
  setTimeout(function () {
    // 利用iframe的onload事件刷新页面
    document.title = title
    let iframe = document.createElement('iframe')
    iframe.style.visibility = 'hidden'
    iframe.style.width = '1px'
    iframe.style.height = '1px'
    iframe.src = 'https://www.baidu.com/favicon.ico'
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe)
      }, 10)
    }
    document.body.appendChild(iframe)
  }, 10)
}
