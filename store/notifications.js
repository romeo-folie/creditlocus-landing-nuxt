/* eslint-disable */

//action types
export const SHOW_SUCCESS_ALERT = 'showSuccessAlert'
export const SHOW_ERROR_ALERT = 'showErrorAlert'

//mutation types
export const SET_ERROR_ALERT = 'setErrorAlert'
export const SET_SUCCESS_ALERT = 'setSuccessAlert'
export const CLEAR_TIMEOUT = 'clearTimeout'
export const SET_TIMEOUT = 'setTimeout'

export const state = () => ({
  error: { displayAlert: false, message: '' },
  success: { displayAlert: false, mail: '' },
  timeout: null
})

export const mutations = {
  [SET_ERROR_ALERT]: (state, payload) => {
    state.error = payload
  },
  [SET_SUCCESS_ALERT]: (state, payload) => {
    state.success = payload
  },
  [SET_TIMEOUT]: (state, payload) => {
    state.timeout = payload
  },
  [CLEAR_TIMEOUT]: (state) => {
    clearTimeout(state.timeout)
  }
}

export const actions = {
  [SHOW_SUCCESS_ALERT]({ commit }, mail) {
    commit(SET_SUCCESS_ALERT, { displayAlert: true, mail })
    let timeout = setTimeout(() => {
      commit(SET_SUCCESS_ALERT, { displayAlert: false, mail: '' })
      commit(CLEAR_TIMEOUT)
    }, 3000)
    commit(SET_TIMEOUT, timeout)
  },
  [SHOW_ERROR_ALERT]({ commit }, message) {
    commit(SET_ERROR_ALERT, { displayAlert: true, message })
    let timeout = setTimeout(() => {
      commit(SET_ERROR_ALERT, { displayAlert: false, message: '' })
      commit(CLEAR_TIMEOUT)
    }, 3000)
    commit(SET_TIMEOUT, timeout)
  },
}
