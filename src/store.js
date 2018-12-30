import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation:"ideas",
    count:1
  },
  mutations: {
    updateState(state, text){
      state.navigation = text;
    },
    updateStateCount(state, text){
      state.count = text;
    }
  },
  actions: {
    updateStateVal({commit},context){
      commit('updateState', context)
    },
    updateStateCount({commit},context){
      commit('updateStateCount', context)
    },
  },
  
});
