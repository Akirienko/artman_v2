<script setup>
import mobileImage from "/images/mobile/bg4.webp"
import desktopImage from "/images/desk/section4.webp"

const description = "The game features two fully voiced main characters. The first is Artman himself — a symbolic name for a protagonist who turning everything he touches into art. The second is Evie, his close childhood friend who played a pivotal role in shaping who he is."

</script>

<template>
  <MainSlider
    :mobileImage="mobileImage"
    :desktopImage="desktopImage"
    :description="description"
    customImgClass="main-image"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop4.svg">
        <img src="/images/icon/titles/TitleMobile4.svg" alt="title" loading="lazy" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

</style>