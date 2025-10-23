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
    customImgClass="main-image"

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
@media (min-width: 768px) {
  :deep(.main-slider .image-container .main-image) {
    width: 590px;
    height: 650px;
  }

  :deep(.main-slider .image-container::before) {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 120px 55px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 120px 55px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 120px 55px rgba(0,0,0,0.75);
    width: 17rem;
    height: 34rem;
    z-index: -1;
  }
}

@media (min-width: 1024px) {
  :deep(.main-slider .image-container .main-image) {
    width: 19rem;
    height: 21rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 9rem;
    height: 20rem;
  }
}

@media (min-width: 1280px) {
  :deep(.main-slider .image-container .main-image) {
    width: 25rem;
    height: 28rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 12rem;
    height: 27rem;
  }
}

@media (min-width: 1440px) {
  :deep(.main-slider .image-container .main-image) {
    width: 565px;
    height: 630px;
  }

  :deep(.main-slider .image-container::before) {
    width: 16rem;
    height: 36rem;
  }
}
</style>