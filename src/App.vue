<template>
  <div>
    <button v-if="!isOpen" class="welcome-message open-btn" id="welcome-message"
      @click="openRightMenu">
      Shop You Taste
    </button>
    <div v-if="isOpen" class="slidein" :class="{ 'show-sidebar': isOpen }">
      <div>
        <div class="card-head">
          <div class="title">Browse Our Best Sellers</div>
          <div class="subtitle">Total Item 17</div>
        </div>
        <div class="right-card">
          <button class="btn close-btn" @click="closeSideBar">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  store,
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openRightMenu() {
      this.isOpen = true;
    },
    closeSideBar() {
      this.isOpen = false;
    },
  }
};
</script>

<style scoped>
.welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffda30;
  /* font-size: 5rem; */
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
</style>
