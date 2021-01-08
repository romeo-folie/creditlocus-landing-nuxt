<template>
  <section class="blog">
    <div class="blog-content">
      <h3>Resources</h3>

      <filter-bar />

      <div class="post-wrapper">
        <blog-post />
        <blog-post />
        <blog-post />
        <blog-post />
        <blog-post />
        <blog-post />
      </div>

      <pagination />
    </div>
  </section>
</template>

<script>
// import FilterBar from '../blog/FilterBar.vue'
// import BlogPost from '../blog/BlogPost.vue'
// import Pagination from '../blog/Pagination.vue'

export default {
  name: 'BlogSection',
  // components: { FilterBar, BlogPost, Pagination },
}
</script>

<style></style>
