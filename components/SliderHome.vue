<template>
  <section class="slider-home">
    <img class="main-img" src="/images/mobile/bgHome.webp" alt="home">

    <div class="main-container">
      <div class="artman-image">
        <picture>
          <source media="(min-width: 768px)" srcset="/images/artmanDesk.svg">
          <img src="/images/artmanMob.webp" alt="title" loading="lazy" />
        </picture>


        <img class="poetry" src="/images/poetry.svg" alt="poetry">

      </div>

      <div class="socials main-container">
        <div class="play-button">
          <span>
            <img class="" src="/images/icon/playMusic.svg" alt="play button">
            <img class="" src="/images/icon/playMusicHover.svg" alt="play button hover">
          </span>
          <p>gameplay trailer</p>
        </div>
        <div class="store-links">
          <NuxtLink to="#" target="_blank">
            <span>APP STORE</span>
            <img src="/images/icon/appStore.svg" alt="appstore">
            <img src="/images/icon/appStoreHover.svg" alt="appstore">
          </NuxtLink>

        </div>
        <div class="google-links">
          <NuxtLink to="#" target="_blank">
            <span>GOOGLE PLAY</span>
            <img src="/images/icon/googlePlay.svg" alt="googlePlay">
            <img src="/images/icon/googlePlayHover.svg" alt="googlePlay">
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.slider-home {
  .artman-image {
    position: absolute;
    top: 25%;
    left: 0;
    .poetry {
      display: none;
    }
  }
  .socials {
    position: absolute;
    bottom: 16px;
    background: transparent;
    border: none;
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .play-button {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      p {
        font-weight: 600;
        font-size: 19px;
        text-transform: uppercase;
        text-align: center;
        top: -10px;
        position: relative;
      }

      span {
        img {
          width: 80px;
          height: 80px;
          transition: all .6s;
          &:last-child {
            opacity: 0;
            z-index: -1;
            position: absolute;
            left: 0;
          }
        }
      }
      &:hover {
        span {
          img {
            &:last-child {
              opacity: 1;
              z-index: 2;
            }
          }
        }
      }
    }
    a {
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        width: 340px;
        position: relative;
        text-decoration: none;
        span {
          z-index: 3;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 2.8px;
          text-transform: uppercase;
          color: var(--Marble, #ECF7FF);
        }
        img {
          position: absolute;
          z-index: 1;
          &:last-child {
            display: none;
          }
        }
      }

    @media (min-width: 1024px) {
      a {
        margin-bottom: 50px;
        span {
          font-size: 19px;
          letter-spacing: 3.8px;
        }
        img {
          position: absolute;
          z-index: 1;
          transition: ease-out .5s;
          &:last-child {
            display: block;
            z-index: 2;
            opacity: 0;
          }
        }
        &:hover {
          img {
            &:first-child {
              opacity: 0;
            }
            &:last-child {
              opacity: 1;
            }
          }
        }
      }

    }
  }


  @media (min-width: 768px) {
    .main-img {
      display: none;
    }
    .artman-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .poetry {
        display: block;
        width: 206px;

      }
    }
    .socials {
      flex-direction: row;
      .play-button {
        position: relative;
        order: 2;
        top: -10px;
        p {
          position: absolute;
          bottom: -20px;
          top: unset;
          white-space: nowrap;
        }
      }
      .store-links {
        order: 1;
        margin-right: 24px;
      }
      .google-links {
        order: 3;
        margin-left: 24px;
      }
    }
  }

  @media (min-width: 1024px) {
    .artman-image {
      top: 5%;
      .poetry {
        position: absolute;
        height: 216px;
        bottom: -40px;
      }
    }
  }
  @media (min-width: 1320px) {
    .artman-image {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .poetry {
        bottom: -20px;
      }
    }
  }

  @media (min-width: 1680px) {
    .artman-image {
      .poetry {
        bottom: -20px;
      }
    }
  }
}
</style>