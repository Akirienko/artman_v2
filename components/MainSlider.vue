<script setup >

const props = defineProps({
  mobileImage: String,
  desktopImage: String,
  description: String,
  altText: {
    type: String,
    default: "Artman image",
    required: false
  },
  customImgClass: {
    type: String,
    default: "",
    required: false
  }
})

</script>

<template>
  <section>
    <div class="main-slider">
      <div class="image-container">
        <picture>
          <source
            media="(min-width: 768px)"
            :srcset="desktopImage"
          />
          <source
            media="(max-width: 768px)"
            :srcset="mobileImage"
          />
          <img
            :src="mobileImage"
            :alt="altText"
            :class="customImgClass"
            loading="lazy"
          />
        </picture>
      </div>
      <div class="main-container text-block">
        <div class="line-container">
          <slot name="titleSvg"></slot>
          <div class="line">
            <img src="/images/icon/line.svg" alt="line" loading="lazy" />
          </div>
        </div>
        <p>{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-slider {
  height: 100%;
  overflow: hidden; // Запобігаємо виходу елементів за межі

  .image-container {
    position: relative;
    height: 100%;
    transition: transform 1.2s ease-out; // Повільний перехід для картинки (як швидкість слайдера)
  }
  .text-block {
    position: absolute;
    z-index: 1;
    bottom: 16px;
    transition: transform 1.0s ease-out, opacity 0.6s ease-out; // Швидший перехід для тексту

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 170%;
      text-align: center;
      color: #ECF7FF;
    }
    .line-container {
      position: relative;
      margin-bottom: 14px;
      .line {
        position: absolute;
        top: 6px;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .image-container {
      height: 700px;
      // width: 900px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 644px;
        width: 454px;
      }
    }
    .text-block {
      position: relative;
      max-width: 600px;
      p {
        font-size: 19px;
      }
      .line-container {
        .line {
          left: 50%;
          transform: translate(-50%, 0%);
          top: 16px;
          width: 343px;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .image-container {
      img {
        height: 420px;
        width: 295px;
      }
    }
  }

  @media (min-width: 1280px) {
    .image-container {
          transition: transform 1.6s ease-out; // Повільний перехід для картинки (як швидкість слайдера)

      img {
        height: 544px;
        width: 382px;
      }
    }

    .text-block {

      transition: transform 1.2s ease-out, opacity 0.6s ease-out;
    }
  }

  @media (min-width: 1440px) {
    .image-container {
      height: 740px;
      img {
        height: 644px;
        width: 454px;
      }
    }
  }
}


</style>