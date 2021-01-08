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
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import Overlay from '@/components/Overlay'

export default {
  components: {
    Header,
    Aside,
    Footer,
    Overlay,
  },
}
</script>
