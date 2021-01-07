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
import FilterBar from '@/components/blog/FilterBar.vue'
import BlogPost from '@/components/blog/BlogPost.vue'
import Pagination from '@/components/blog/Pagination.vue'

export default {
  name: 'BlogSection',
  components: { FilterBar, BlogPost, Pagination },
}
</script>

<style></style>
