<script setup>
import mobileImage from "/images/mobile/bg6.webp"
import desktopImage from "/images/desk/section6.webp"

const description = "Player's actions will influence the  Mankind Index, an indicator that reflects the current level of chaos on the planet. It unlocks pathways to various shadowy activities for those eager to exploit the cyberpunk setting further."

</script>

<template>
  <MainSlider
    :mobileImage="mobileImage"
    :desktopImage="desktopImage"
    :description="description"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop6.svg">
        <img src="/images/icon/titles/TitleMobile6.svg" alt="title" loading="lazy" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

</style>