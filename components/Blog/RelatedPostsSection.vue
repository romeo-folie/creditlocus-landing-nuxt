<template>
  <section class="related-posts">
    <div class="related-post-content">
      <h3>Related Content</h3>
      <hr />
      <div class="post-wrapper">
        <blog-post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RelatedPostsSection',
  // props: {
  //   posts: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
  },
}
</script>

<style></style>
