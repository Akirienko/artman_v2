<script setup>
import mobileImage from "/images/mobile/bg1.webp"
import desktopImage from "/images/desk/section1.webp"

const description = "Welcome to Hollywood 2056! Step into the shoes of Artman, a visionary artist and movie producer in a dystopian cyberpunk future where creativity is on the brink of extinction."

</script>

<template>
  <MainSlider
    :mobileImage="mobileImage"
    :desktopImage="desktopImage"
    :description="description"
    customImgClass="main-shadow"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop1.svg">
        <img src="/images/icon/titles/TitleMobile1.svg" alt="title" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

</style>