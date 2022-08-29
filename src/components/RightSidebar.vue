<template>
  <div>
    <div class="card-head">
      <carousel-section :config="config"/>
      <item-cards v-if="currentStep === 1" :item="config.flow.pages[0]"/>
      <item-lists v-if="currentStep === 2" :item="config.flow.pages[1]"/>
      <footer>
        <template v-if="currentStep === 1">
          <div class="btn-outline" @click="this.clickSkip">Skip</div>
          <div class="btn" @click.prevent="this.clickNext">Next</div>
        </template>
        <template v-if="currentStep === 2">
          <div v-if="currentStep === 2" class="btn-outline" @click="this.clickRestart">Restart</div>
          <div class="actions" v-if="currentStep === 2">
            <div class="btn-outline" @click="this.clickBack">Back</div>
            <div class="btn">Submit</div>
          </div>
        </template>
      </footer>
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
</template>

<script>
import store from '@/store';
import CarouselSection from '@/components/CarouselSection.vue';
import ItemCards from '@/components/ItemCards.vue';
import ItemLists from '@/components/ItemLists.vue';

export default {
  name: 'RightSidebar',
  store,
  props: ['config', 'closeSideBar'],
  components: {
    CarouselSection,
    ItemCards,
    ItemLists
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    clickSkip() {
      this.currentStep = 2;
      store.commit('setRecords', this.config.flow.pages[0].cards);
      store.commit('setSelectedRecords', []);
    },
    clickNext() {
      this.currentStep = 2;
    },
    clickBack() {
      this.currentStep = 1;
    },
    clickRestart() {
      this.currentStep = 1;
      store.commit('setRestart', true);
    },
  },
};
</script>

<style scoped>
footer {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 535px;
  width: 350px;
  background: #fff;
  padding: 0px 20px;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0px 9px 14px #333;
}

.btn-outline {
  color: #c7a17a;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7a17a;
  border-radius: 6px;
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-outline {
  margin-right: 7px;
  background: rgba(199, 161, 122, 0.16);
  border: none;
}

.btn {
  color: #fff;
  background-color: #c7a17a;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
</style>
