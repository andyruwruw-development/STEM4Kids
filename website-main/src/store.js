import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        {
          index: 0,
          type: "slider",
          list: [
           {link: "./public/hi.jpg", title: "", href: "/locatyions", paragraph: "paragraph"},
           {link: "./public/hi.jpg", title: "", href: "/locatyions", paragraph: "paragraph"},
           {link: "./public/hi.jpg", title: "", href: "/locatyions", paragraph: "paragraph"},
          ]
        },
      ],
      pages: [

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
      console.log("HI");
      var dataObject = 
      await context.commit('setData', dataObject);
    }
  }
})
