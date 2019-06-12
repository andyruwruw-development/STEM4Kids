import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: null,

    location: "all",

    subject: null,
    list: [],

    item: null,

    staff: null,
    

    
  },
  mutations: {
    setAdmin(state, admin) {
      state.admin = admin;
    },
    setLocation(state, location) {
      state.location = location;
    },
    setItem(state, item) {
      state.item = item;
    },
    setSubject(state, subject) {
      state.subject = subject;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        let response = await axios.post("/api/admins", payload);
        await context.commit('setAdmin', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/admins/login", data);
        await context.commit('setAdmin', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/admins");
        await context.commit('setAdmin', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getAdmin(context) {
      try {
        let response = await axios.get("/api/admins");
        context.commit('setAdmin', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
  }
})
