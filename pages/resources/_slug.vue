<template>
  <fragment>
    <post-view :post="post" />
    <related-posts-section />
  </fragment>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      post: (state) => state.posts.post,
    }),
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      this.$store.dispatch('posts/fetchBlogPost', this.$route.params.slug)
    },
  },
}
</script>

<style></style>
