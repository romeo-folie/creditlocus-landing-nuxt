<template>
  <blog-section />
</template>

<script>
export default {
  async asyncData({ params, $http, $config, store }) {
    const posts = await $http.$get($config.baseURL + '/articles')
    store.commit('posts/setPosts', posts)
  },
}
</script>

<style></style>
