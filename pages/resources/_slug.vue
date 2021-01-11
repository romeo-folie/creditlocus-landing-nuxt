<template>
  <fragment>
    <post-view :post="post" />
    <related-posts-section />
  </fragment>
</template>

<script>
export default {
  async asyncData({ route, $http }) {
    const post = await $http.$get(
      `http://localhost:1337/articles?slug=${route.query.slug}`
    )
    return { post }
  },
}
</script>

<style></style>
