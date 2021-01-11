<template>
  <blog-section :posts="posts" />
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const posts = await $http.$get('http://localhost:1337/articles')
    return { posts }
  },
}
</script>

<style></style>
