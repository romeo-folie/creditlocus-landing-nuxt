<template>
  <fragment>
    <post-view />
    <related-posts-section />
  </fragment>
</template>

<script>
import PostView from '~/components/blog/PostView.vue'
import RelatedPostsSection from '~/components/blog/RelatedPostsSection.vue'

export default {
  components: { PostView, RelatedPostsSection },
}
</script>

<style></style>
