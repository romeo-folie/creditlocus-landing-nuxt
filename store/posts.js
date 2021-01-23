// mutation types
export const SET_POSTS = 'setPosts'
export const SET_ACTIVE_POST = 'setActivePost'
export const SET_RELATED_POSTS = 'setRelatedPosts'

// action types
export const GET_RELATED_POSTS = 'getRelatedPosts'

export const state = () => ({
  posts: [],
  post: {},
  relatedPosts: [],
})

export const getters = {
  getRelatedPosts: (state) => () => {
    return state.posts.filter((post) => post.slug !== state.post.slug)
  },
}

export const mutations = {
  [SET_POSTS]: (state, payload) => {
    state.posts = payload
  },
  [SET_ACTIVE_POST]: (state, payload) => {
    state.post = payload
  },
  [SET_RELATED_POSTS]: (state, payload) => {
    state.relatedPosts = payload
  },
}

export const actions = {
  [GET_RELATED_POSTS]({ commit, getters }) {
    const posts = getters.getRelatedPosts()
    commit(SET_RELATED_POSTS, posts)
  },
}
