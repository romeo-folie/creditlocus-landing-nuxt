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
export default {
  name: 'BlogSection',
}
</script>

<style></style>
