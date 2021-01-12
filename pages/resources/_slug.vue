<template>
  <fragment>
    <post-view :post="post" />
    <related-posts-section />
  </fragment>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $http }) {
    const res = await $http.$get(
      `http://localhost:1337/articles?slug=${params.slug}`
    )
    const post = res[0]
    return { post }
  },
}
</script>

<style></style>
