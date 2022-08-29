<template>
  <div class="carousel-wrapper" :style="carouselWrapperStyle">
    <div class="title">{{ title }}</div>
    <div class="subtitle">Total Item {{ totalItem }}</div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(slider, index) in config?.flow.carousel.defaultContent" :key="index">
        <a :href="slider.ctaLink" target="_blank">
          <div class="item-inner">
            <div class="thumb">
              <img :src="slider.imageUrl" :alt="slider.title" />
            </div>
            <div class="slider-title">
              <h6>{{ slider.title }}</h6>
            </div>
          </div>
        </a>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  name: 'CarouselSection',
  props: ['config'],
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    };
  },
  computed: {
    carouselWrapperStyle() {
      return {
        'background-color': this.config.flow.carousel.backgroundColor,
        'font-family': this.config.flow.carousel.fontFamily,
        color: this.config.flow.carousel.color,
      };
    },
    title() {
      return this.config.flow.carousel.defaultTitle;
    },
    totalItem() {
      return this.config.flow.carousel.defaultContent.length;
    }
  }
};
</script>

<style>
.carousel-wrapper {
  padding: 20px;
}
.item-inner {
  position: relative;
  border-radius: 6px;
  margin: 0px 5px;
}
.thumb img {
  width: 100%;
  min-height: 150px;
  border-radius: 6px;
}
.slider-title {
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 999;
}

.slider-title h6 {
  margin: 0;
  color: #fff;
}
.slick-prev {
  left: -2%;
  z-index: 999;
}

.slick-next {
  right: 0%;
  z-index: 999;
}

.slick-prev:before {
  content: url('../../public/images/prev.png');
}

.slick-next:before {
  content: url('../../public/images/next.png');
}

.item-inner::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(180deg, rgba(39, 39, 39, 0) 7.81%, #272727 100%);
}

</style>
