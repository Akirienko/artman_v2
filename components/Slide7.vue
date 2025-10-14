<script setup>
import mobileImage from "/images/mobile/bg7.webp"
import desktopImage from "/images/desk/section7.webp"

const description = "Beyond the global map, players can delve into the intricate landscapes of three distinct cities. The largest of these is, unsurprisingly, Los Angeles — a sprawling metropolis where"

</script>

<template>
  <MainSlider
    :mobileImage="mobileImage"
    :desktopImage="desktopImage"
    :description="description"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop7.svg">
        <img src="/images/icon/titles/TitleMobile7.svg" alt="title" loading="lazy" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

</style>