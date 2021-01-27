<template>
  <footer class="bottom-nav">
    <div class="bottom-nav-content">
      <div class="link-grid">
        <div class="column">
          <h4>Solutions</h4>
          <a href="#">Open an account</a>
          <nuxt-link to="/#how-it-works">How it works</nuxt-link>
          <nuxt-link to="/resources">Resources</nuxt-link>
        </div>

        <div class="column">
          <h4>Company</h4>
          <nuxt-link to="/about">About</nuxt-link>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        <div class="column">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <hr />

      <div class="final-line">
        <div class="company">
          <span id="copyright"> &#169;</span>
          <span>2020 Credit Locus Limited</span>
        </div>

        <div class="social-media">
          <img src="/icons/facebook.svg" alt="facebook_icon" />
          <img src="/icons/twitter.svg" alt="twitter_icon" />
          <img src="/icons/instagram.svg" alt="instagram_icon" />
          <img src="/icons/linkedin.svg" alt="linkedin_icon" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style></style>
