<template>
  <aside id="side-nav" class="side-menu slide-in-right">
    <div class="aside-content-wrapper">
      <div class="btn-container">
        <a href="javascript:void(0);" onclick="hideSideNav()">
          <img src="/icons/x.svg" alt="close_icon" />
        </a>
      </div>

      <nav class="side-navbar">
        <ul class="side-navlist">
          <li>
            <nuxt-link
              class="nav-link"
              to="/#how-it-works"
              onclick="hideSideNav()"
              >How it works</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="nav-link" to="/resources" onclick="hideSideNav()"
              >Resources</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="nav-link" to="/about" onclick="hideSideNav()"
              >About</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
}
</script>

<style scoped>
.slide-in-right {
  -webkit-animation: slide-in-right 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)
    0.5s both;
  animation: slide-in-right 1s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
