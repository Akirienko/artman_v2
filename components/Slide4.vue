<script setup>
import mobileImage from "/images/mobile/bg4.webp"
import desktopImage from "/images/desk/section4.webp"

const description = "In Artman, players have access to six distinct genres, each offering eight unique scripts. These screenplays unlock progressively as players build their reputation in Hollywood and complete side missions within the game world"

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
        <img src="/images/icon/titles/TitleMobile4.svg" alt="title" />
      </picture>

    </template>

  </MainSlider>
</template>

<style lang="scss" scoped>

@media (min-width: 768px) {
  :deep(.main-slider .image-container .main-image) {
    width: 313px ;
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
    width: 9.3rem;
    height: 19rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 8rem;
    height: 16rem;
  }
}

@media (min-width: 1280px) {
  :deep(.main-slider .image-container .main-image) {
    width: 13.2rem;
    height: 27rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 11rem;
    height: 26rem;
  }
}

@media (min-width: 1440px) {
  :deep(.main-slider .image-container .main-image) {
    width: 18.2rem;
    height: 37rem;
  }

  :deep(.main-slider .image-container::before) {
    width: 16rem;
    height: 35rem;
  }
}
</style>