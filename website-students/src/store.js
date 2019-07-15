import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    path: [],

  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPath(state, path) {
      state.path = path;
    },
    pushPath(state, path) {
      state.path.push(path);
    }
  },
  actions: {
    checkUser() {
      if (this.state.user == null)
      {
        this.$router.push("/login");
      }
    },

    pushPath(context, payload) {
      payload.path.index = this.state.path.length;
      context.commit('pushPath', payload.path);
    },
    resetPath(context) {
      context.commit('setPath', []);
    },
    splicePath(context, payload) {
      let oldPath = this.state.path;
      oldPath.splice(payload.index, oldPath.length - payload.index);
      context.commit('setPath', oldPath);
    }
  }
})
