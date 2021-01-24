<template>
  <div class="filter-bar">
    <div class="filter-bar-content">
      <div class="search-container">
        <img src="/icons/search.svg" alt="Search Icon" />
        <input
          id="search"
          v-model="search"
          type="text"
          name="search"
          placeholder="Keyword"
        />
        <div class="vertical-line"></div>
      </div>

      <div class="select-container">
        <select id="filter" v-model="category" name="filter">
          <option value="all">All</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.name">
            {{ cat.name }}
          </option>
        </select>
      </div>

      <div class="button-container">
        <a href="#" class="search-btn" @click="searchPosts">
          <img src="/icons/find.svg" alt="Search Icon" />
          <span>Search</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FilterBar',
  data() {
    return {
      search: '',
      category: 'all',
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.posts.categories,
    }),
  },
  mounted() {
    this.$store.dispatch('posts/getCategories')
  },
  methods: {
    searchPosts(e) {
      e.preventDefault()

      // call action here to filter blog posts
      // put search value and category values in an object and call the action
      this.$store.dispatch('posts/filterBlogposts', {
        search: this.search,
        category: this.category.toLowerCase(),
      })
    },
  },
}
</script>

<style></style>
