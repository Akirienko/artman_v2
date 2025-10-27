<script setup>
import mobileImage from "/images/mobile/bg3.webp"
import desktopImage from "/images/desk/section3.webp"

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
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop3.svg">
        <img src="/images/icon/titles/TitleMobile3.svg" alt="title" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>
  @media (min-width: 768px) {

    :deep(.main-slider .image-container::before) {
      content: "";
      position: absolute;
      top: 50%;
      left: 51%;
      transform: translate(-50%, -50%);
      box-shadow: 0px 0px 120px 55px rgba(0,0,0,0.75);
      -webkit-box-shadow: 0px 0px 120px 55px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 120px 55px rgba(0,0,0,0.75);
      width: 19rem;
      height: 32rem;
      z-index: -1;
    }
  }

  @media (min-width: 1024px) {
    :deep(.main-slider .image-container .main-image) {
      width: 14rem;
      height: 21rem;
    }

    :deep(.main-slider .image-container::before) {
      width: 11rem;
      height: 17rem;
    }
  }

  @media (min-width: 1240px) {

    :deep(.main-slider .image-container .main-image) {
      width: 19rem;
      height: 28rem;
    }

    :deep(.main-slider .image-container::before) {
      width: 13rem;
      height: 22rem;
    }
  }

  @media (min-width: 1440px) {

    :deep(.main-slider .image-container .main-image) {
      width: 26rem;
      height: 38rem;
    }

    :deep(.main-slider .image-container::before) {
      width: 20rem;
      height: 31rem;
    }
  }
</style>