/* eslint-disable */
export const state = () => ({})
export const mutations = {}
export const actions = {
  async nuxtServerInit({ dispatch }, { params }) {
    if (params.slug) {
      await dispatch('posts/fetchBlogPost', params.slug)
    }
  },
}
