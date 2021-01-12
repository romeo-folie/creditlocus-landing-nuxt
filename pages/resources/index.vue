<template>
  <blog-section :posts="posts" />
</template>

<script>
export default {
  async asyncData({ params, $http, $config }) {
    const posts = await $http.$get($config.baseURL + '/articles')
    return { posts }
  },
}
</script>

<style></style>
