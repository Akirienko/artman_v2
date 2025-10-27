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
    customImgClass="main-image"
  >
    <template #titleSvg>

      <picture>
        <source media="(min-width: 768px)" srcset="/images/icon/titles/TitleDesktop7.svg">
        <img src="/images/icon/titles/TitleMobile7.svg" alt="title" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

@media (min-width: 768px) {
  :deep(.main-slider .image-container .main-image) {
    width: 660px;
    height: 500px;
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
    width: 35rem;
    height: 25rem;
    z-index: -1;
  }
}

@media (min-width: 1024px) {
  :deep(.main-slider .image-container .main-image) {
    width: 490px;
    height: 370px;
  }

  :deep(.main-slider .image-container::before) {
    width: 25rem;
    height: 18rem;
  }
}

@media (min-width: 1280px) {
  :deep(.main-slider .image-container .main-image) {
    width: 600px;
    height: 450px;
  }

  :deep(.main-slider .image-container::before) {
    width: 31rem;
    height: 22rem;
  }
}

@media (min-width: 1440px) {
  :deep(.main-slider .image-container .main-image) {
    width: 800px;
    height: 607px;
  }

  :deep(.main-slider .image-container::before) {
    width: 43rem;
    height: 28rem;
  }
}
</style>