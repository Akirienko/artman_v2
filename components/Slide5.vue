<script setup>
import mobileImage from "/images/mobile/bg5.webp"
import desktopImage from "/images/desk/section5.webp"

const description = "The films stored in studio, where player can access detailed statistics on every creative aspect as well as the commercial performance. And also have the option to release a director’s cut or sell the distribution rights to a streaming service."

</script>

<template>
  <MainSlider
    :mobileImage="mobileImage"
    :desktopImage="desktopImage"
    :description="description"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop5.svg">
        <img src="/images/icon/titles/TitleMobile5.svg" alt="title" loading="lazy" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

</style>