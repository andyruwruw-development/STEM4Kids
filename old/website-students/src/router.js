import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Course from './views/Course.vue'
import Profile from './views/Profile.vue'

import Login from './views/Login.vue'
import Register from './views/Register.vue'

import Lesson from './views/Lesson.vue'
import Exercise from './views/Exercise.vue'
import Quiz from './views/Quiz.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/course/:course',
      name: 'course',
      component: Course
    },
    {
      path: '/:course/lesson/:chapter/:section',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/:course/quiz/:chapter',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/:course/exercise/:chapter/:section',
      name: 'exercise',
      component: Exercise
    },
  ]
})
