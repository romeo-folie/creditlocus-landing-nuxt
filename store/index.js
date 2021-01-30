/* eslint-disable */
// Action types
const START_INTERVAL = 'startInterval'
const END_INTERVAL = 'endInterval'

// Mutation types
const STOP_INTERVAL = 'stopInterval'
const SET_COUNTER = 'setCounter'

export const state = () => ({
  counterInterval: null,
  amount: 0,
  step: 100,
})
export const mutations = {
  [SET_COUNTER]: (state) => {
    // state.counterInterval = setInterval(() => {
    //   // state.amount = parseInt(state.amount) + parseInt(state.step)
    //   if(state.amount === 4000){
    //     clearInterval(state.counterInterval)
    //   }
    // }, 250)
  },
  [STOP_INTERVAL]: (state, payload) => {
    state.counterInterval = null
  },
}
export const actions = {
  async nuxtServerInit({ dispatch }, { params }) {
    if (params.slug) {
      await dispatch('posts/fetchBlogPost', params.slug)
    }
  },
  [START_INTERVAL]({ commit }) {
    commit(SET_COUNTER)
  },
  [END_INTERVAL]({ commit }) {
    commit(STOP_INTERVAL)
  },
}
