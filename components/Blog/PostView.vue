<template>
  <section class="post">
    <div class="post-content">
      <nuxt-link id="back" to="/resources">Back</nuxt-link>
      <h3>{{ post.title }}</h3>
      <div id="category">{{ post.categories[0].name.toUpperCase() }}</div>

      <img src="/images/carousel/6.jpg" alt="Headline Image" />

      <div class="article-wrapper">
        <article>
          {{ post.content }}
        </article>
        <div id="ad">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostView',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
