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
import FilterBar from '~/components/blog/FilterBar'
import BlogPost from '~/components/blog/BlogPost'
import Pagination from '~/components/blog/Pagination'

export default {
  name: 'BlogSection',
  components: { FilterBar, BlogPost, Pagination },
}
</script>

<style></style>
