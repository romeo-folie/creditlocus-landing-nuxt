<template>
  <fragment>
    <post-view :post="post" />
    <related-posts-section />
  </fragment>
</template>

<script>
export default {
  async asyncData({ params, $http, $config, store }) {
    const res = await $http.$get(
      $config.baseURL + '/articles?slug=' + params.slug
    )
    const post = res[0]
    store.commit('posts/setActivePost', post)
    return { post }
  },
}
</script>

<style></style>
