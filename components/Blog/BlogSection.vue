<template>
  <section class="blog">
    <div class="blog-content">
      <h3>Resources</h3>

      <filter-bar />

      <div class="post-wrapper">
        <blog-post v-for="post in posts" :key="post.id" :post="post" />
      </div>

      <pagination />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlogSection',
  computed: {
    ...mapState({
      posts: (state) => state.posts.filteredPosts,
    }),
  },
}
</script>

<style></style>
