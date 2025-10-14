<template>
  <main>
    <div class="main-bg"></div>
    <div class="line-dots"></div>
    <!-- <SliderHome /> -->
    <!-- <Slide1 /> -->
    <!-- <Slide2 /> -->
    <!-- <Slide3 /> -->
    <Slide4 />
    <!-- <Slide5 /> -->
    <!-- <Slide6 /> -->
    <!-- <Slide7 /> -->
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;


  @media (min-width: 768px) {
    background-image: url('/images/desk/deskBg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>