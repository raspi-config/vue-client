import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})
