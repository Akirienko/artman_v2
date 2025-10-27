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
           <svg width="262" height="262" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_6288)">
            <circle cx="131" cy="131" r="23.75" transform="rotate(-180 131 131)" stroke="#7B8699" stroke-width="0.5" stroke-dasharray="0.5 2"/>
            <rect x="131.25" y="154.501" width="107" height="0.5" transform="rotate(90 131.25 154.501)" fill="url(#paint0_linear_2_6288)"/>
            <rect width="107" height="0.5" transform="matrix(0 -1 -1 0 131.25 107.5)" fill="url(#paint1_linear_2_6288)"/>
            <rect width="2" height="2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 129.586 154.501)" fill="#5CDEE6"/>
            <rect width="2" height="2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 129.586 107.493)" fill="#5CDEE6"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_2_6288" x1="238.25" y1="154.747" x2="131.25" y2="154.746" gradientUnits="userSpaceOnUse">
            <stop stop-color="#253596" stop-opacity="0"/>
            <stop offset="0.456017" stop-color="#4A76D4"/>
            <stop offset="1" stop-color="#76EAF1"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2_6288" x1="107" y1="0.246154" x2="-1.5482e-06" y2="0.245479" gradientUnits="userSpaceOnUse">
            <stop stop-color="#253596" stop-opacity="0"/>
            <stop offset="0.456017" stop-color="#4A76D4"/>
            <stop offset="1" stop-color="#76EAF1"/>
            </linearGradient>
            <clipPath id="clip0_2_6288">
            <rect width="262" height="262" fill="white" transform="matrix(-1 0 0 -1 262 262)"/>
            </clipPath>
            </defs>
          </svg>

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
      width: 262px;
      height: 262px;
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