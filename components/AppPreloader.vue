<template>
  <Transition name="preloader">
    <div v-if="isLoading" class="preloader">
      <div class="loader-background">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="/images/preloader/preloader.webp"
          />
          <source
            media="(max-width: 768px)"
            srcset="/images/preloader/preloaderMobile.webp"
          />
          <img
            src="/images/preloader/preloaderMobile.webp"
            alt="preloader artman"
          />
        </picture>
      </div>
      <div class="loader-container">
        <div class="loader-svg">
          <img src="/images/loader.svg" alt="Loading..." />
        </div>
        <div class="loading-percentage">
          {{ Math.round(loadingProgress) }}%
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isLoading = ref(true);
const loadingProgress = ref(0);

const trackLoadingProgress = () => {
  let progress = 0;
  const targetProgress = 100;

  const interval = setInterval(() => {
    progress += Math.random() * 8 + 2;

    if (progress >= targetProgress) {
      loadingProgress.value = 100;
      clearInterval(interval);

      setTimeout(() => {
        isLoading.value = false;
      }, 800);
    } else {
      loadingProgress.value = Math.min(progress, 98);
    }
  }, 120);
};

const checkPageLoad = () => {
  if (process.client) {
    if (document.readyState === 'complete') {
      trackLoadingProgress();
    } else {
      window.addEventListener('load', () => {
        trackLoadingProgress();
      });
      trackLoadingProgress();
    }
  } else {
    trackLoadingProgress();
  }
};

onMounted(() => {
  checkPageLoad();
});
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loader-background {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .6;
  }

  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;

    .loader-svg {
      width: 260px;
      height: 260px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        animation: rotate180 3s linear infinite;
      }
    }

    .loading-percentage {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@keyframes rotate180 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.preloader-enter-active,
.preloader-leave-active {
  transition: opacity 0.6s ease;
}

.preloader-enter-from,
.preloader-leave-to {
  opacity: 0;
}
</style>