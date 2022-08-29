import Vue from 'vue';
import Vuex from 'vuex';
import config from '../../configs/config.json';

Vue.use(Vuex);

const records = config.flow.pages[0].cards;
const { cards } = config.flow.pages[1];

export default new Vuex.Store({
  state: {
    records,
    data: cards,
    selectedRecords: [],
    selectedRecord: [],
  },
  getters: {
    getRecords: (state) => state.records,
    getData: (state) => state.data,
    getSelectedItems: (state) => state.selectedRecords,
    getSelectedItem: (state) => state.selectedRecord,
  },
  mutations: {
    setRecords(state, data) {
      state.records = data;
    },
    setSelectedRecords(state, data) {
      state.selectedRecords = data;
    },
    setData(state, data) {
      state.data = data;
    },
    setSelectedItem(state, data) {
      state.selectedRecord = data;
    },
    setRestart(state, data) {
      if (data) {
        state.records = records;
        state.data = cards;
        state.selectedRecords = [];
        state.selectedRecord = [];
      }
    },
  },
  actions: {
    handleSelectedItems({ commit }, payload) {
      commit('setRecords', payload);
    },

    handleItems({ commit }, payload) {
      commit('setSelectedRecords', payload);
    },
  },
  modules: {
  },
});
