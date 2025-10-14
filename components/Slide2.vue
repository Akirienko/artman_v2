<script setup>
import mobileImage from "/images/mobile/bg2.webp"
import desktopImage from "/images/desk/section2.webp"

const description = "Artman is an authentic blend of genres, inspired by the philosophy of old-school immersive sims. The core gameplay is built around two distinct paths for the protagonist: the path of entrepreneurship and the path of creativity."

</script>

<template>
  <MainSlider
    :mobileImage="mobileImage"
    :desktopImage="desktopImage"
    :description="description"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop2.svg">
        <img src="/images/icon/titles/TitleMobile2.svg" alt="title" loading="lazy" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

</style>