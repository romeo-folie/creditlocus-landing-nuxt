import * as Filters from '~/helpers/filters'

// mutation types
export const SET_POSTS = 'setPosts'
export const SET_ACTIVE_POST = 'setActivePost'
export const SET_RELATED_POSTS = 'setRelatedPosts'
export const FILTER_POSTS = 'filterPosts'
export const SET_CATEGORIES = 'setCategories'

// action types
export const GET_RELATED_POSTS = 'getRelatedPosts'
export const FILTER_BLOGPOSTS = 'filterBlogposts'
export const GET_CATEGORIES = 'getCategories'

export const state = () => ({
  posts: [],
  filteredPosts: [],
  post: {},
  relatedPosts: [],
  categories: [],
})

export const getters = {
  getRelatedPosts: (state) => () => {
    return state.posts.filter((post) => post.slug !== state.post.slug)
  },
  getPostCategories: (state) => () => {
    const categories = []
    const categoryNames = []
    state.posts.map((post) => {
      post.categories.map((cat) => {
        if (!categoryNames.includes(cat.name)) {
          categoryNames.push(cat.name)
          categories.push(cat)
        }
      })
    })
    return categories
  },
}

export const mutations = {
  [SET_POSTS]: (state, payload) => {
    state.posts = payload
    state.filteredPosts = payload
  },
  [SET_ACTIVE_POST]: (state, payload) => {
    state.post = payload
  },
  [SET_RELATED_POSTS]: (state, payload) => {
    state.relatedPosts = payload
  },
  [FILTER_POSTS]: (state, payload) => {
    const filteredPosts = Filters.filterPosts(payload, state.posts)
    state.filteredPosts = filteredPosts
  },
  [SET_CATEGORIES]: (state, payload) => {
    state.categories = payload
  },
}

export const actions = {
  [GET_RELATED_POSTS]({ commit, getters }) {
    const posts = getters.getRelatedPosts()
    commit(SET_RELATED_POSTS, posts)
  },
  [GET_CATEGORIES]({ commit, getters }) {
    const categories = getters.getPostCategories()
    commit(SET_CATEGORIES, categories)
  },
  [FILTER_BLOGPOSTS]({ commit }, filterObj) {
    commit(FILTER_POSTS, filterObj)
  },
}
