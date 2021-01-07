<template>
  <aside id="side-nav" class="side-menu">
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

<style></style>
