/* eslint-disable */

//action types
export const SHOW_SUCCESS_ALERT = 'showSuccessAlert'
export const SHOW_ERROR_ALERT = 'showErrorAlert'

//mutation types
export const SET_ERROR_ALERT = 'setErrorAlert'
export const SET_SUCCESS_ALERT = 'setSuccessAlert'

export const state = () => ({
  error: { displayAlert: false, message: '' },
  success: { displayAlert: false, mail: '' },
})

export const mutations = {
  [SET_ERROR_ALERT]: (state, payload) => {
    state.error = payload
  },
  [SET_SUCCESS_ALERT]: (state, payload) => {
    state.success = payload
  },
}

export const actions = {
  [SHOW_SUCCESS_ALERT]({ commit }, mail) {
    commit(SET_SUCCESS_ALERT, { displayAlert: true, mail })
    setTimeout(() => {
      commit(SET_SUCCESS_ALERT, { displayAlert: false, mail: '' })
    }, 3000)
  },
  [SHOW_ERROR_ALERT]({ commit }, message) {
    commit(SET_ERROR_ALERT, { displayAlert: true, message })
    setTimeout(() => {
      commit(SET_ERROR_ALERT, { displayAlert: false, message: '' })
    }, 3000)
  },
}
