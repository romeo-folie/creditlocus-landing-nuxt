<template>
  <section class="blog">
    <div class="blog-content">
      <h3 class="fade-in-top">Resources</h3>

      <filter-bar class="fade-in-top" />

      <div class="post-wrapper">
        <blog-post
          v-for="post in posts"
          :key="post.id"
          class="scale-in-hor-center"
          :post="post"
        />
      </div>

      <button
        v-if="allPosts.length > limit"
        id="see-more"
        class="slide-in-top"
        @click="loadMorePosts"
      >
        See more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#372865"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-down"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlogSection',
  data() {
    return {
      increment: 3,
      limit: 3,
    }
  },
  computed: {
    ...mapState({
      allPosts: (state) => state.posts.filteredPosts,
    }),
    posts() {
      const all = this.allPosts
      return all.slice(0, this.limit)
    },
  },
  methods: {
    loadMorePosts(e) {
      e.preventDefault()

      this.limit = this.limit + this.increment
    },
  },
}
</script>

<style scoped>
.slide-in-top {
  -webkit-animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.3s
    both;
  animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.3s both;
}

.fade-in-top {
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.8s
    both;
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.8s both;
}

.scale-in-hor-center {
  -webkit-animation: scale-in-hor-center 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
  animation: scale-in-hor-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s
    both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>
