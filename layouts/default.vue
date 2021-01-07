<template>
  <div>
    <Header />
    <Aside />
    <Overlay />
    <div class="content-wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Aside from '~/components/Aside.vue'
import Overlay from '~/components/Overlay.vue'

export default {
  components: {
    Header,
    Aside,
    Footer,
    Overlay,
  },
}
</script>
