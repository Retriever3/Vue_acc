import account from './account/state'
import base from './base/state'
import statement from './statement/state'
import budget from './budget/state'

export default {
  namespaced: true,
  modules: {
    account,
    base,
    statement,
    budget,
  },
  state: {
    connect: false,

  },
  getters: {
  },
  mutations: {
  },
}
