import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    switch: true,

    user: null,
    parent: null,
    admin: null,

    list: null,

    lesson: null,
    exercise: null,
    quiz: null,

    path: null,
  },
  mutations: {
    setSwitch(state, value) {
      state.switch = value;
    },

    setUser(state, user) {
      state.user = user;
    },
    setParent(state, parent) {
      state.parent = parent;
    },
    setAdmin(state, admin) {
      state.admin = admin;
    },

    setList(state, list) {
      state.list = list;
    },

    setLesson(state, lesson) {
      state.lesson = lesson;
    },
    setExercise(state, exercise) {
      state.exercise = exercise;
    },
    setQuiz(state, quiz) {
      state.quiz = quiz;
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
    async registerChild(context, data) {
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
    async loginChild(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logoutChild(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getChildUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    // List Retrival
    async getLessonList(context, payload) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setList', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    // Lesson Retrival 
    async getLesson(context, payload) {
      try {
        let lesson = await axios.get("/api/lesson/" + payload.subject + "/" + payload.topicIndex + "/" + payload.index);
        context.commit('setLesson', lesson.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getExercise(context, payload) {
      try {
        let exercise = await axios.get("/api/exercise/" + payload.subject + "/" + payload.topicIndex + "/" + payload.index);
        context.commit('setExercise', exercise.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getQuiz(context, payload) {
      try {
        let quiz = await axios.get("/api/quiz/" + payload.subject + "/" + payload.topicIndex + "/" + payload.index);
        context.commit('setQuiz', quiz.data);
        return "";
      } catch (error) {
        return "";
      }
    },
  }
})
