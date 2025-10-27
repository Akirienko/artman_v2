<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation, Mousewheel];

const swiperInstance = ref(null);
const currentSlide = ref(0);
const totalSlides = 8;
const hasUserScrolled = ref(false);

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index);
  }
};

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex;

  if (swiper.realIndex !== 0) {
    hasUserScrolled.value = true;
  }


};

const onSlideProgress = (swiper) => {
};

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;

  currentSlide.value = swiper.realIndex;
};
</script>

<template>
  <main>
    <div class="main-bg"></div>
    <div class="line-dots">
      <img src="/images/icon/leftDots.svg" alt="dots">
      <img src="/images/icon/rightDots.svg" alt="dots">

    </div>

    <div class="pagination-wrapper">
      <img class="pagination-bg" src="/images/icon/paginationBg.svg" alt="">

      <div class="custom-pagination">
        <div
          class="active-dot-slider"
          :style="{ transform: `translateX(${currentSlide * 34}px) translateY(-50%)` }"
        >
          <img src="/images/icon/activeDot.webp" alt="active dot" />

          <Transition name="tooltip">
            <div v-if="!hasUserScrolled" class="active-dot-slider__tooltip">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.66" d="M8 20L1.0459 0.875977C3.23183 1.60379 5.56954 2 8 2C10.4301 2 12.7674 1.60361 14.9531 0.875977L8 20Z" fill="url(#paint0_linear_1_1333)"/>
                <path d="M6 23L8 24L10 23L8 22L6 23Z" fill="#589ADD"/>
                <defs>
                <linearGradient id="paint0_linear_1_1333" x1="7.44559" y1="21.4215" x2="9.99309" y2="-37.0459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#253596" stop-opacity="0"/>
                <stop offset="0.392628" stop-color="#4A76D4"/>
                <stop offset="1" stop-color="#76EAF1"/>
                </linearGradient>
                </defs>
              </svg>

              <p>Scroll to Learn More</p>
            </div>
          </Transition>

        </div>

        <button
          v-for="(slide, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          class="pagination-dot"
        >
          <svg
            width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2L2 0L4 2L2 4L0 2Z" fill="#8291DB"/>
          </svg>
        </button>
      </div>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :mousewheel="true"
      :speed="1200"
      :effect="'slide'"
      direction="horizontal"
      :loop="true"
      :space-between="0"
      :allow-touch-move="true"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
      @progress="onSlideProgress"
      :touch-angle="100"
      class="my-swiper"
    >
      <SwiperSlide>
        <SliderHome />
      </SwiperSlide>
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide3 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide4 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide5 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide6 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide7 />
      </SwiperSlide>
    </Swiper>

  </main>
</template>

<style lang="scss" scoped>
.line-dots {
  display: none;
}

@media (min-width: 1440px) {
  .line-dots {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    z-index: 1;
    pointer-events: none;


  }
}

.main-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  @media (min-width: 768px) {
    background-image: url('/images/desk/deskBg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.my-swiper {
  width: 100%;
  height: 100vh;
  height: 100dvh;

  :deep(.swiper-slide) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s ease;

    @media (min-width: 1024px) {
      opacity: 0.5;

      &.swiper-slide-active {
        opacity: 1;
      }
    }
  }
}

.pagination-wrapper {
  position: fixed;
  top: 30px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .pagination-bg {
    position: absolute;
    height: 100px;
    max-width: 1024px;
    border: none;
  }

  .custom-pagination {
    display: flex;
    flex-direction: row;
    gap: 30px;
    position: relative;

    .active-dot-slider {
      position: absolute;
      z-index: 10;
      transition: transform 0.6s ease;
      pointer-events: none;
      left: -18px;
      top: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70px;
        height: 70px;
        display: block;
      }

      &__tooltip {
        position: absolute;
        bottom: -45px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        pointer-events: none;

        p {
          color: #FFFFFF;
          font-size: 14px;
          white-space: nowrap;
          font-weight: 500;
          text-align: center;
          letter-spacing: 0.05em;
        }

        @media (min-width:768px) {
          bottom: -50px;
          p {
            font-size: 19px;
          }
        }
      }
    }
    .pagination-dot {
      width: auto;
      height: auto;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.6s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      z-index: 5;

      img {
        width: 40px;
        height: 40px;
        transition: transform 0.6s ease;
      }

      svg {
        transition: all 0.6s ease;
      }

      &:hover {
        transform: scale(1.1);

        svg {
          fill: #fff;
        }
      }

      &.active {
        transform: scale(1.2);

        img {
          filter: brightness(1.2);
        }
      }
    }

    @media (min-width: 1024px) {

        top: 5px;

    }
  }
}

// Анімація для tooltip
.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 0.4s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

.tooltip-enter-to,
.tooltip-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0px);
}
</style>