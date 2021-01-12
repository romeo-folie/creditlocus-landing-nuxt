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
export default {
  name: 'BlogSection',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.savePosts()
  },
  methods: {
    savePosts() {
      this.$store.commit('posts/setPosts', this.posts)
    },
  },
}
</script>

<style></style>
