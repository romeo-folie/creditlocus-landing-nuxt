<template>
  <section class="post">
    <div class="post-content">
      <nuxt-link id="back" to="/resources">Back</nuxt-link>
      <h3>{{ post.title }}</h3>
      <div id="category">
        {{ post.categories[0].name.toUpperCase() }}
      </div>

      <img
        v-if="post.image.length"
        :src="post.image[0].url"
        :alt="post.image[0].name"
      />

      <div class="article-wrapper">
        <article
          v-if="post.content"
          v-html="$md.render(post.content.toString())"
        ></article>
        <!-- <div id="ad">
          <img src="" alt="" />
        </div> -->
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
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
