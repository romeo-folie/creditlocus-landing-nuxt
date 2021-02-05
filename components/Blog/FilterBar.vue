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

      <!-- <div class="select-container">
        <select id="filter" v-model="category" name="filter">
          <option value="all">All</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.name">
            {{ cat.name }}
          </option>
        </select>
      </div> -->

      <div class="custom-select-container" :class="{ active: drop }">
        <button class="custom-select-trigger" @click="triggerDropdown">
          <span>{{ category }}</span>
          <svg fill="none" viewBox="0 0 10 6" class="styles_arrow__2ystB">
            <path
              fill="#372865"
              d="M5.06 5.783L.82.299h8.481l-4.24 5.484z"
            ></path>
          </svg>
        </button>

        <div v-show="drop" class="dropdown-list">
          <ul>
            <li
              v-for="cat in categories"
              :key="cat.id"
              class="custom-option"
              :class="{ selected: category == cat.name }"
              :data-value="cat.name"
              :value="cat.name"
              @click="categorySelected"
            >
              {{ cat.name }}
            </li>
            <!-- <li class="custom-option selected" data-value="category_b">
              Category B
            </li>
            <li class="custom-option" data-value="category_c">Category C</li>
            <li class="custom-option" data-value="category_d">Category D</li> -->
          </ul>
        </div>
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
      category: 'All',
      drop: false,
    }
  },
  computed: {
    ...mapState({
      categories: (state) => [{ name: 'All' }, ...state.posts.categories],
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
    categorySelected(e) {
      this.category = e.target.dataset.value
      this.triggerDropdown()
      // console.log('value ', e.target.dataset.value)
    },
    triggerDropdown() {
      this.drop = !this.drop
    },
  },
}
</script>

<style scoped>
.custom-select-container.active .dropdown-list {
  z-index: 1000;
}
</style>
