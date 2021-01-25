<template>
  <section class="blog">
    <div class="blog-content">
      <h3>Resources</h3>

      <filter-bar />

      <div class="post-wrapper">
        <blog-post v-for="post in posts" :key="post.id" :post="post" />
      </div>

      <button
        v-if="allPosts.length > limit"
        id="see-more"
        @click="loadMorePosts"
      >
        See more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#372865"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-down"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlogSection',
  data() {
    return {
      increment: 3,
      limit: 3,
    }
  },
  computed: {
    ...mapState({
      allPosts: (state) => state.posts.filteredPosts,
    }),
    posts() {
      const all = this.allPosts
      return all.slice(0, this.limit)
    },
  },
  methods: {
    loadMorePosts(e) {
      e.preventDefault()

      this.limit = this.limit + this.increment
    },
  },
}
</script>

<style></style>
