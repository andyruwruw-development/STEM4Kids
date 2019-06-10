import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    switch: true,
    user: null,

    subject: null,
    list: null,

    data: null,

    path: [{title: "My Library", path: "/", current: true}],
  },
  mutations: {
    setSwitch(state, value) {
      state.switch = value;
    },

    setUser(state, user) {
      state.user = user;
    },
    setList(state, list) {
      state.list = list;
    },

    setData(state, data) {
      state.data = data;
    },
    setPath(state, path) {
      state.path = path;
    },
  },
  actions: {
    async switchToggle(context, payload) {
      try {
        context.commit('setSwitch', payload.value);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    // Children Accounts.
    async register(context, data) {
      try {
        console.log("Attempting Registration");
        let response = await axios.post("/api/users", data);
        console.log(response);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
  }
})
