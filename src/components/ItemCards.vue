<template>
  <div class="wrapper">
    <div class="header">
      <div>
        <h6
          :style="{ color: item.title.color, 'font-family': item.title.fontFamily }"
        >
          {{ item.title.text }}
        </h6>
        <p
          class="description"
          :style="{ color: item.description.color, 'font-family': item.description.fontFamily }"
        >
          {{ item.description.text }}
        </p>
      </div>
      <div class="process"><span>1/2</span></div>
    </div>
    <div class="elements">
      <label
        :for="`selectedItems${card.id}`"
        class="card-item"
        :class="card.selected ? 'active' : null"
        v-for="(card, i) in records"
        :key="i"
      >
        <input
          v-model="selectedRecords"
          type="checkbox"
          :value="card"
          name="selecteditems"
          :id="`selectedItems${card.id}`"
          style="display: none"
          @change="clickSelection(card, $event.target.checked)"
        />
        <div>
          <img :src="card.icon" :alt="card.title" class="thumb-img" />
        </div>
        <div class="item-title">{{ card.title }}</div>
      </label>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';

export default {
  name: 'ItemCards',
  props: ['item'],
  data() {
    return {
      selectedRecords: [],
      records: [...store.getters.getRecords] || [],
    };
  },
  computed: {
    ...mapGetters({
      getRecords: 'getRecords',
    }),
  },
  watch: {
    getRecords(value) {
      if (value) {
        this.records = [...value];
      }
    },
  },
  methods: {
    clickSelection(card, status) {
      card.selected = status;

      const updateRecords = this.records.map((record) => {
        if (record.id === card.id) {
          record = card;
        } else {
          record.selected = false;
        }
        return record;
      });

      store.commit('setRecords', updateRecords);
      store.commit('setSelectedRecords', JSON.parse(JSON.stringify(this.selectedRecords)));
    },
  },
};
</script>

<style scoped>
.header{
  margin: 10px 0;
}
footer {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 535px;
  width: 100%;
  background: #fff;
  padding: 0px 20px;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0px 9px 14px #333;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.process {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 5px solid;
  border-color: #f1f1f1 #f1f1f1 #f1f1f1 #f1f1f1;
  background: rgba(#c7a17a, 0.1);
  border-radius: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #272727;
  font-size: 14px;
  transform: rotate(45deg);
  position: relative;
}

.process span {
  transform: rotate(-45deg);
  display: block;
}
.elements {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
  padding-bottom: 70px;
}
.card-item {
  flex-basis: 30%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin: 8px 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.card-item.active {
  border: 1px solid #c7a17a;
}

.card-item.active:after {
  position: absolute;
  content: url('../../public/images/active-item.png');
  top: 0;
  right: 0%;
  z-index: 0;
}
</style>
