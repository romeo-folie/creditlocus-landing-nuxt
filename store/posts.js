// mutation types
export const SET_POSTS = 'setPosts'

export const state = () => ({
  posts: [],
})

export const getters = {
  getRelatedPosts: (state) => (slug) => {
    return state.posts.filter((post) => post.slug !== slug)
  },
}

export const mutations = {
  [SET_POSTS]: (state, payload) => {
    state.posts = payload
  },
}
