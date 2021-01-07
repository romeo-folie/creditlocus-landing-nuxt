<template>
  <nav class="navbar">
    <div class="left-items">
      <div class="brand">
        <a href="/">
          <img src="/images/brand.svg" alt="credit locus logo" />
        </a>
      </div>

      <ul class="navlist">
        <li><a class="nav-link" href="">How it works</a></li>
        <li>
          <NuxtLink class="nav-link" to="/resources">Resources</NuxtLink>
        </li>
        <li><NuxtLink class="nav-link" to="/about">About</NuxtLink></li>
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
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style></style>
