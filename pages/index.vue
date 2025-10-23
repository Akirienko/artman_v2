<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation, Mousewheel];

const swiperInstance = ref(null);
const currentSlide = ref(0);
const totalSlides = 8;

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index);
  }
};

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex;
};

// Анімація при початку переходу між слайдами
// const onSlideChangeTransitionStart = (swiper) => {
//   console.log('Transition start');

//   swiper.slides.forEach((slideEl, index) => {
//     const imageContainer = slideEl.querySelector('.image-container');
//     const textBlock = slideEl.querySelector('.text-block');

//     if (imageContainer && textBlock) {
//       // Перевіряємо ширину екрану
//       const isLargeScreen = window.innerWidth > 1240;
//       const translateValue = isLargeScreen ? '100%' : '50%';

//       if (index === swiper.activeIndex) {
//         // Активний слайд - елементи на місці
//         textBlock.style.transform = 'translateX(0%)';
//         textBlock.style.opacity = '1';
//       }
//       // } else if (index < swiper.activeIndex) {
//       //   // Попередній слайд - рухається вліво
//       //   textBlock.style.transform = `translateX(-${translateValue})`;
//       //   textBlock.style.opacity = '0';
//       // } else {
//       //   // Наступний слайд - рухається вправо
//       //   textBlock.style.transform = `translateX(${translateValue})`;
//       //   textBlock.style.opacity = '0';
//       // }
//     }
//   });
// };

// Паралакс ефект для текстового блоку (спрощений варіант)
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
      <img src="/images/icon/leftDots.svg" alt="dots" loading="lazy">
      <img src="/images/icon/rightDots.svg" alt="dots" loading="lazy">

    </div>

    <div class="pagination-wrapper">
      <img class="pagination-bg" src="/images/icon/paginationBg.svg" alt="">

      <div class="custom-pagination">
        <div
          class="active-dot-slider"
          :style="{ transform: `translateX(${currentSlide * 34}px) translateY(-50%)` }"
        >
          <img src="/images/icon/activeDot.webp" alt="active dot" />
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
      @slideChangeTransitionStart="onSlideChangeTransitionStart"
      @progress="onSlideProgress"
      :breakpoints="{
        // 1024: {
        //   slidesPerView: 1,
        //   spaceBetween: 50,
        //   centeredSlides: true,
        //   // loop: false
        // }
      }"
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

  :deep(.swiper-slide) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s ease;

    // На десктопі налаштування для 3 слайдів з opacity ефектом
    @media (min-width: 1024px) {
      opacity: 0.5; // За замовчуванням opacity 0.5

      // Активний слайд має повну прозорість
      &.swiper-slide-active {
        opacity: 1;
        // width: 900px !important;
      }
    }
  }
}

// Кастомна пагінація
.pagination-wrapper {
  position: fixed;
  top: 30px;
  // left: 50%;
  // transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .pagination-bg {
    position: absolute;
    height: 100px;
    max-width: 1024px;
  }

  .custom-pagination {
    display: flex;
    flex-direction: row;
    gap: 30px;
    position: relative;

    // Рухома активна точка
    .active-dot-slider {
      position: absolute;
      z-index: 10;
      transition: transform 0.6s ease;
      pointer-events: none;
      left: -18px; // Центруємо відносно маленьких точок
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
</style>