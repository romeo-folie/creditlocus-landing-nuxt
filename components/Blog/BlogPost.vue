<template>
  <div class="post">
    <div class="image-container">
      <img src="/images/carousel/7.jpg" alt="" />
    </div>
    <div class="text-container">
      <div class="line-one">
        <span id="cat">{{ post.categories[0].name }}</span>
        <span>{{ $moment(post.published_at).format('MMMM DD') }}</span>
      </div>
      <div class="article-content">
        <h4>{{ post.title }}</h4>
        <p>
          {{ post.content }}
        </p>
      </div>
      <nuxt-link
        id="more"
        :to="{
          name: 'resources-slug',
          params: { slug: post.slug },
        }"
        >Read more</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
