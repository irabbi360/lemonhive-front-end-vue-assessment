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
      <right-sidebar :config="config" :closeSideBar="closeSideBar"></right-sidebar>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import RightSidebar from '@/components/RightSidebar.vue';
import configData from '../configs/config.json';

export default {
  name: 'App',
  store,
  components: {
    RightSidebar
  },
  data() {
    return {
      isOpen: false,
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

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
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
</style>
