/**
 * Created by lenovo on 2017/3/17.
 */
import {
  CHANGE_SHOWCODE_USERNAME,
  CHANGE_SHOW_CODE
}
from './mutation-type'

const mutations = {
  [CHANGE_SHOW_CODE] (state, changeCode) {
    state.showCode = changeCode
  },
  [CHANGE_SHOWCODE_USERNAME] (state, changeUserName) {
    state.changeCodeUserName = changeUserName
  }
}

export default mutations
