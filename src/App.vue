<template>
  <div id="welcome-message">
    <button v-if="!isOpen" class="launcher-btn"
      :style="{
        background: config.launcher.backgroundColor,
        color: config.launcher.color,
        color: config.launcher.color,
        fontSize: config.launcher.fontSize,
        fontFamily: config.launcher.fontFamily
        }"
      @click="openRightMenu">
      {{ config.launcher.ctaText }}
    </button>
    <div v-if="isOpen" class="slidein" :class="{ 'show-sidebar': isOpen }">
      <div>
        <div class="card-head">
          <div class="title">Browse Our Best Sellers</div>
          <div class="subtitle">Total Item 17</div>
          <div>
            <VueSlickCarousel v-bind="settings">
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
              <div><h3>5</h3></div>
              <div><h3>6</h3></div>
              <div><h3>7</h3></div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="right-card">
          <button class="btn close-btn"
          @click="closeSideBar"
          :style="{
            background: config.launcher.backgroundColor,
            color: config.launcher.color,
            color: config.launcher.color,
            fontSize: config.launcher.fontSize,
            fontFamily: config.launcher.fontFamily
            }">
          {{ config.launcher.closeText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import VueSlickCarousel from 'vue-slick-carousel';
import configData from '../configs/config.json';

export default {
  name: 'App',
  store,
  components: { VueSlickCarousel },
  data() {
    return {
      isOpen: false,
      settings: {
        arrows: true,
        dots: true,
        infinite: false,
        centerMode: true,
        centerPadding: '20px',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
    };
  },
  computed: {
    config() {
      return configData;
    }
  },
  methods: {
    openRightMenu() {
      this.isOpen = true;
      console.log(configData);
    },
    closeSideBar() {
      this.isOpen = false;
    },
  }
};
</script>

<style scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
.launcher-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* font-size: 5rem; */
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px 30px;
  border: #C7A17A;
}
.open-btn{
  background: #C7A17A;
  color: #ffffff !important;
  border:#C7A17A;
  padding: 10px 30px;
}
.right-card {
  margin: 0;
  position: absolute;
  top: 50%;
  left: -54px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.slidein {
  width: 350px;
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: -100%;
  background: #ffffff;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.show-sidebar {
  right: 0;
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.card-head{
    background: #C7A17A;
    height: 150px;
    padding: 10px;
}
.title {
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
}
.subtitle {
  color: #ffffff;
}
.close-btn{
  background: #C7A17A;
  color: #ffffff;
  border:#C7A17A;
  padding: 10px 20px;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  white-space: nowrap;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}
@media (max-width: 992px) {
  .slidein {
    width: 350px !important;
    top: 0 !important;
  }
}
.slick-arrow {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 45%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev {
  left: 150px;
  z-index: 10;
}
.slick-prev::before {
  content: "";
  display: inline-block;
  width: 36px;
  height: 36px;
  border-left: 8px solid rgba(0, 0, 0, 0.5);
  border-bottom: 8px solid rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
}
.slick-prev:focus::before,
.slick-prev:hover::before {
  border-left: 8px solid rgba(0, 0, 0, 0.8);
  border-bottom: 8px solid rgba(0, 0, 0, 0.8);
}
.slick-next {
  right: 150px;
  z-index: 10;
}
.slick-next::before {
  content: "";
  display: inline-block;
  width: 36px;
  height: 36px;
  border-top: 8px solid rgba(0, 0, 0, 0.5);
  border-right: 8px solid rgba(0, 0, 0, 0.5);
  transform: rotate(45deg);
}
.slick-next:focus::before,
.slick-next:hover::before {
  border-top: 8px solid rgba(0, 0, 0, 0.8);
  border-right: 8px solid rgba(0, 0, 0, 0.8);
}
</style>
