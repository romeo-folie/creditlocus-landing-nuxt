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
            <a class="nav-link" href="#" onclick="hideSideNav()"
              >How it works</a
            >
          </li>
          <li>
            <a class="nav-link" href="#" onclick="hideSideNav()">Resources</a>
          </li>
          <li>
            <a class="nav-link" href="#" onclick="hideSideNav()">About</a>
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
