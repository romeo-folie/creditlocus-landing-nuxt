/* eslint-disable */

// action types
export const ADD_USER = 'addUser'

// mutation types
export const SET_USER = 'setUser'

export const state = () => ({
  user: '',
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
}

export const actions = {
  [ADD_USER]({ commit }, userObj) {
    return new Promise((resolve, reject) => {
      this.$http
        .$post('https://credit-locus-api.herokuapp.com/subscribers', userObj)
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
