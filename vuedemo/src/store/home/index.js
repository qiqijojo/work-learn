/**
 * Created by lenovo on 2017/3/17.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  userName: 'master',
  showCode: '1201',
  changeCodeUserName: 'none'
}

export default{
  state,
  actions,
  getters,
  mutations
}
