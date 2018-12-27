import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation:"ideas"
  },
  mutations: {
    updateState(state, text){
      debugger
      state.navigation = text;
    }
  },
  actions: {
    updateStateVal({commit},context){
      debugger
      commit('updateState', context)
    }
  },
  
});
