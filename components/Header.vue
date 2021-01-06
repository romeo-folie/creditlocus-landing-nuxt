<template>
  <header class="top-nav">
    <nav class="navbar">
      <div class="left-items">
        <div class="brand">
          <a href="#">
            <img src="/images/brand.svg" alt="credit locus logo" />
          </a>
        </div>

        <ul class="navlist">
          <li><a class="nav-link" href="">How it works</a></li>
          <li><a class="nav-link" href="">Resources</a></li>
          <li><a class="nav-link" href="">About</a></li>
        </ul>
      </div>

      <div class="right-items">
        <ul class="navlist">
          <li><a class="nav-link" href="">Login</a></li>
          <li><a id="sign-up-btn" href="">Sign up</a></li>
        </ul>
      </div>

      <div class="dropdown-menu">
        <a
          class="dropdown-link"
          href="javascript:void(0);"
          onclick="showSideNav()"
          ><img src="/icons/menu.svg" alt="menu_icon"
        /></a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style></style>
