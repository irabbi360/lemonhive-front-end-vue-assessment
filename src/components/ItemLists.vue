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
      <div class="process"><span> 1/2 </span></div>
    </div>

    <div class="elements">
      <label
        :for="`selectedItem${card.id}`"
        class="card-item"
        :class="card.selected ? 'active' : null"
        v-for="(card, i) in records"
        :key="i"
      >
        <input
          v-model="selectedItem"
          type="radio"
          :value="card"
          name="selecteditem"
          :id="`selectedItem${card.id}`"
          style="display: none"
          @change="clickSelection(card, $event.target.checked)"
        />
        <div class="title">{{ card.title }}</div>
        <p class="description">{{ card.description }}</p>
      </label>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'ListView',
  store,
  props: ['item'],
  data() {
    return {
      selectedItem: [],
      records: [...store.getters.getData] || [],
      tests: store.getters.getSelectedItem || [],
    };
  },
  methods: {
    clickSelection(card, status) {
      card.selected = status;

      const updateRecords = this.records.map((item) => {
        if (item.id === card.id) {
          item = card;
        } else {
          item.selected = false;
        }

        return item;
      });

      store.commit('setData', updateRecords);
      store.commit('setSelectedItem', JSON.parse(JSON.stringify(this.selectedItem)));
    },
  },
};
</script>

<style scoped>
.process {
  border-color: #c7a17a #c7a17a #f1f1f1 #f1f1f1;
}

.process span {
  transform: rotate(-45deg);
  display: block;
}

.elements {
  margin-top: 20px;
  display: block;
  padding-bottom: 70px;
}
.card-item {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: block;
  padding: 20px;
  margin-bottom: 15px;
}
.card-item:last-child {
  margin-bottom: 0px;
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

.description {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #333;
  margin-bottom: 0px;
  margin-top: 5px;
}

.wrapper {
  padding: 20px;
}
.description {
  margin: 5px 0px 0px;
}
</style>
