import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    profile: null,

    feed: null,

    staff: null,
    calendar: null,
    staffprofile: null,
    

  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setFeed(state, feed) {
      state.feed = feed;
    },
  },
  actions: {
    
  }
})
