<template>
  <header id="top-nav" class="top-nav">
    <navbar class="scale-in-ver-center" />
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.scale-in-ver-center {
  -webkit-animation: scale-in-ver-center 0.2s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s both;
  animation: scale-in-ver-center 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s
    both;
}

@-webkit-keyframes scale-in-ver-center {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    opacity: 1;
  }
}
@keyframes scale-in-ver-center {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    opacity: 1;
  }
}
</style>
