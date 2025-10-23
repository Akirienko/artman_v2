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
    customImgClass="block-shadow main-image"
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



@media (min-width: 768px) {
  :deep(.main-slider .image-container .main-image) {
    width: 768px;
    height: 650px;
  }

  :deep(.main-slider .image-container::before) {
    content: "";
    position: absolute;
    top: 50%;
    left: 51%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 120px 53px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 120px 53px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 120px 53px rgba(0,0,0,0.75);
    width: 252px;
    height: 600px;
    z-index: -1;
  }
}

@media (min-width: 1024px) {
  :deep(.main-slider .image-container .main-image) {
    width: 470px;
    height: 339px;
  }

  :deep(.main-slider .image-container::before) {
    width: 130px;
    height: 320px;
  }
}

@media (min-width: 1280px) {
  :deep(.main-slider .image-container .main-image) {
    width: 642px;
    height: 459px;
  }
  :deep(.main-slider .image-container::before) {
    width: 190px;
    height: 435px;

  }
}

@media (min-width: 1440px) {
  :deep(.main-slider .image-container .main-image) {
    width: 840px;
    height: 630px;
  }

  :deep(.main-slider .image-container::before) {
    width: 235px;
    height: 590px;
  }
}
</style>