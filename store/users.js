/* eslint-disable */

// action types
export const ADD_USER = 'addUser'

// mutation types
export const SET_USER = 'setUser'
export const SET_LOADING = 'setLoading'

export const state = () => ({
  user: '',
  loading: false
})

export const getters = {
  getLastUser: (state) => {
    return state.user
  },
}

export const mutations = {
  [SET_USER]: (state, payload) => {
    state.user = payload
  },
  [SET_LOADING]: (state, payload) => {
    state.loading = payload
  }
}

export const actions = {
  [ADD_USER]({ commit }, userObj) {
    commit(SET_LOADING, true)
    return new Promise((resolve, reject) => {
      this.$http
        .$post(this.$config.baseURL + '/subscribers', userObj)
        .then((res) => {
          commit(SET_USER, res.email)
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
