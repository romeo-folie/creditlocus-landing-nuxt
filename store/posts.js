import * as Filters from '~/helpers/filters'

// mutation types
const SET_POSTS = 'setPosts'
const SET_ACTIVE_POST = 'setActivePost'
const SET_RELATED_POSTS = 'setRelatedPosts'
const FILTER_POSTS = 'filterPosts'
const SET_CATEGORIES = 'setCategories'
const CLEAR_POST = 'clearPost'

// action types
const GET_RELATED_POSTS = 'getRelatedPosts'
const FILTER_BLOGPOSTS = 'filterBlogposts'
const GET_CATEGORIES = 'getCategories'
const FETCH_POST = 'fetchBlogPost'

export const state = () => ({
  posts: [],
  filteredPosts: [],
  post: {},
  relatedPosts: [],
  categories: [],
})

export const getters = {
  getRelatedPosts: (state) => (slug) => {
    return state.posts.filter((post) => post.slug !== slug)
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
  getPostBySlug: (state) => (slug) => {
    return state.posts.find((post) => post.slug === slug)
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
  [CLEAR_POST]: (state) => {
    state.post = {}
  },
}

export const actions = {
  [GET_RELATED_POSTS]({ commit, getters }, slug) {
    const posts = getters.getRelatedPosts(slug)
    commit(SET_RELATED_POSTS, posts)
  },
  [GET_CATEGORIES]({ commit, getters }) {
    const categories = getters.getPostCategories()
    commit(SET_CATEGORIES, categories)
  },
  [FILTER_BLOGPOSTS]({ commit }, filterObj) {
    commit(FILTER_POSTS, filterObj)
  },
  async [FETCH_POST]({ commit, dispatch, getters }, slug) {
    commit(CLEAR_POST)
    let post = getters.getPostBySlug(slug)
    if (post) {
      commit(SET_ACTIVE_POST, post)
    } else {
      const res = await this.$http.$get(
        this.$config.baseURL + '/articles?slug=' + slug
      )
      post = res[0]
      commit(SET_ACTIVE_POST, post)
    }

    dispatch(GET_RELATED_POSTS, post.slug)
  },
}
