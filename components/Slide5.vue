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
    customImgClass="main-image"
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
@media (min-width: 768px) {
  :deep(.main-slider .image-container .main-image) {
    height: 644px;
    width: 675px;
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
    width: 22rem;
    height: 21rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 9rem;
    height: 20rem;
  }
}

@media (min-width: 1280px) {
  :deep(.main-slider .image-container .main-image) {
    width: 29.3rem;
    height: 28rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 12rem;
    height: 27rem;
  }
}

@media (min-width: 1440px) {
  :deep(.main-slider .image-container .main-image) {
    width: 663px;
    height: 630px;
  }

  :deep(.main-slider .image-container::before) {
    width: 16rem;
    height: 36rem;
  }
}
</style>