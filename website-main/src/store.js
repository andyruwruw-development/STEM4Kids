import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async getData(context) {
      console.log("HI");
      var dataObject = {
        header: {
          title: "STEM 4 Kids",
        },
        footer: {

        },
        home: [

        ],
        pages: [

        ],
      };
      await context.commit('setData', dataObject);
    }
  }
})
