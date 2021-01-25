/* eslint-disable */

// import { PaginationPlugin, createResource } from 'vuex-pagination'

// export const plugins = [PaginationPlugin]

// createResource('posts', fetchPage, {
//   prefetch: true
// })

export const state = () => ({})
export const mutations = {}
export const actions = {
  async nuxtServerInit({ dispatch }, { params }) {
    if (params.slug) {
      await dispatch('posts/fetchBlogPost', params.slug)
    }
  },
}
