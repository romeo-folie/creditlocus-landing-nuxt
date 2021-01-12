/* eslint-disable */

// action types
export const ADD_USER = 'addUser'

// mutation types
export const SET_USER = 'setUser'

export const state = () => ({
  user: '',
})

export const mutations = {
  [SET_USER]: (state, payload) => {
    state.user = payload
  },
}

export const actions = {
  [ADD_USER] ({ commit }, userObj) {
    commit(SET_USER, userObj.email)
    return this.$fire.firestore.collection('users').add(userObj)
  },
}
