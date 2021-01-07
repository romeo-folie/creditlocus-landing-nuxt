<template>
  <section class="related-posts">
    <div class="related-post-content">
      <h3>Related Content</h3>
      <hr />
      <div class="post-wrapper">
        <blog-post />
        <blog-post />
        <blog-post />
      </div>
    </div>
  </section>
</template>

<script>
import BlogPost from './BlogPost.vue'

export default {
  name: 'RelatedPostsSection',
  components: {
    BlogPost,
  },
}
</script>

<style></style>
