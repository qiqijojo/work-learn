/**
 * Created by lenovo on 2017/3/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  }
})
