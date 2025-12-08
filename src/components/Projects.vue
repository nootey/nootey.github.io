<template>
  <div id="hideOnMobile" class="rectangle">
    <h2 id="hideOnMobile">Projects</h2>
  </div>

  <Smoothie id="projects" :weight="0.01" class="smoothie-container" style="border-left: 1px solid var(--text-color-primary); border-right: 1px solid var(--text-color-primary);">

    <div id="main-row" style="width: 80%; margin: auto;" class="d-flex flex-column align-items-center justify-content-center gap-4">
      <animated-component>
        <div class="title">Projects</div>
      </animated-component>
      <!-- Left text -->
      <div class="d-flex flex-row">

        <div class="paragraph-text text-center">
          Here are a few projects I’ve worked on—ranging from professional applications developed as part of my full-time role to personal experiments and side projects.
          They reflect my interest in solving real problems.
        </div>

      </div>

      <!-- Right carousel -->
      <div id="inner" class="d-flex flex-row" style="width: 80%">
        <div class="carousel-wrapper">
          <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" @click="$router.push({name: 'project-view'})">
              <div class="carousel-item active">
                <img src="../assets/images/sph.png" class="d-block w-100" alt="Sportheartt">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-text">SPH</h5>
                  <p class="carousel-text">Sportheartt</p>
                </div>
              </div>
              <div class="carousel-item active">
                <img src="../assets/images/wealthwarden.png" class="d-block w-100" alt="WealthWarden">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-text">WealthWarden</h5>
                  <p class="carousel-text">Personal finance tracker.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/images/ng-ml.png" class="d-block w-100" alt="NoiseGuard ML">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-text">NoiseGuard ML</h5>
                  <p class="carousel-text">Audio classification server.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/images/neurolytix.png" class="d-block w-100" alt="Calibration management">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="carousel-text">Neurolytix</h5>
                  <p class="carousel-text">Company knowledge manager.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span class="custom-arrow left-arrow"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span class="custom-arrow right-arrow"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row w-100 justify-content-center mt-2">
        <button @click="$router.push({name: 'project-view'})" class="side-button" tabIndex="-1" style="width: 50%;"> Project view</button>
      </div>

    </div>
  </Smoothie>
</template>

<script setup>
import { Smoothie } from 'vue-smoothie';
import AnimatedComponent from '../components/reusable/AnimatedComponent.vue';

const props = defineProps({
  darkMode: Boolean
});

</script>

<style scoped>
.rectangle {
  position: absolute;
  z-index: 2;
  background-color: var(--accent-color);
  transform: translateY(50%);
  top: 200%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: calc(((100vw - 90%) / 2) + 90px);
  max-width: 180px;
  left: 0;
  margin-left: calc((100vw - 1800px) / 2);
  border-radius: 25px;
  padding-right: 3.5rem;
  overflow-x: hidden;
}

.rectangle h2 {
  background: none !important;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: var(--background-color-primary);
  display: flex;
  align-items: center;
  margin-left: 45%;
  margin-bottom: 0;
  transform: rotate(90deg);
}

@media only screen and (max-width: 1770px) {
  .rectangle{
    margin-left: 0 !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

@media only screen and (max-width: 1100px) {
  .rectangle{
    max-width: 90px;
  }
}

#main-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

@media only screen and (max-width: 800px) {

  #hideOnMobile{
    display: none;
  }
  #main-row {
    width: 100% !important;
    flex-direction: column;
    flex-wrap: wrap;
  }
  #inner {
    width: 100% !important;
  }
  .paragraph-text{
    font-size: 1rem !important;
    width: 100% !important;
  }
}

.carousel-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.carousel-wrapper:hover {
  cursor: pointer;
}

.carousel {
  width: 100%;
}

.carousel-item img {
  border-radius: 12px;
  width: 100%;
  height: auto;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: transparent;
  border-radius: 0;
  padding: 0;
  background-size: 100% 100%;
  width: 36px;
  height: 36px;
}

.custom-arrow {
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: var(--text-color-primary);
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

/* Thin Left Arrow */
.left-arrow {
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='15 18 9 12 15 6'/></svg>");
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='15 18 9 12 15 6'/></svg>");
}

/* Thin Right Arrow */
.right-arrow {
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='9 18 15 12 9 6'/></svg>");
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='9 18 15 12 9 6'/></svg>");
}

.carousel-control-prev {
  left: -4%;
}

.carousel-control-next {
  right: -4%;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
}

.carousel-text {
  background-color: transparent;
  color: white;
}
</style>