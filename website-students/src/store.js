import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: "andyruwruw",
      name: "Andrew Young"
    },
    profile: {
      level: 1,
      xp: 100,
      achievements: [],
      courses: [{name: "Introduction to Python Python Python", qpercent: .5, epercent: .6, lpercent: .7, enabled: true},
      {name: "C++", qpercent: .5, epercent: .6, lpercent: .7, enabled: true},
      ],
    },

    path: [],

    course: null,
    list: [],

    lesson: null,
    exercise: null,
    quiz: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPath(state, path) {
      state.path = path;
    },
    setCourses(state, courses) {
      state.courses = courses;
    },
    setCourse(state, course) {
      state.course = course;
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
    checkUser() {
      if (this.state.user == null)
        this.$router.push("/login");
    },
    login(context, payload) {

    },
    register(context, payload) {

    },




    pathPush(context, payload) {
      payload.path.index = this.state.path.length;
      let path = this.state.path;
      path.push(payload.path);
      context.commit('setPath', path);
    },
    pathReset(context) {
      context.commit('setPath', []);
    },
    pathSplice(context, payload) {
      let oldPath = this.state.path;
      oldPath.splice(payload.index, oldPath.length - payload.index);
      context.commit('setPath', oldPath);
    },
  }
})
