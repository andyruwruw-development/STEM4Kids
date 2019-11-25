import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      header: {
        title: "STEM 4 Kids",
      },
      footer: {

      },
      home: [
        {type: "slider", index: 0, slides: [{path: "/", title: "Progressive Curriculum", description: "Students will advance week by week with new curriculum."}], link: "/"},
      ],
    },
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async getData(context) {

    }
  }
})
