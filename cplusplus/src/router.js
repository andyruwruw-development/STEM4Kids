import Vue from 'vue'
import Router from 'vue-router'

// Kid Routes
import KidsHome from './views/Kids/General/KidsHome.vue'
import KidsEnter from './views/Kids/General/KidsEnter.vue'
import KidsHelp from './views/Kids/General/KidsHelp.vue'

import Lesson from './views/Kids/Material/LessonView.vue'
import Exercise from './views/Kids/Material/LessonView.vue'
import Quiz from './views/Kids/Material/LessonView.vue'

import KidsProfile from './views/Kids/General/KidsProfile.vue'

// Parent Routes
import ParentEnter from './views/Parents/ParentEnter.vue'
import ParentHelp from './views/Parents/ParentHelp.vue'
import ParentHome from './views/Parents/ParentHome.vue'
import ParentProfile from './views/Parents/ParentProfile.vue'
import ParentProgress from './views/Parents/ParentProgress.vue'

// Admin Routes
import AdminHome from './views/Admin/AdminHome.vue'
import AdminEdit from './views/Admin/AdminEdit.vue'
import AdminEnter from './views/Admin/AdminEnter.vue'
import AdminLessonsList from './views/Admin/AdminLessonsList.vue'
import AdminProfile from './views/Admin/AdminProfile.vue'
import AdminProgress from './views/Admin/AdminProgress.vue'
import AdminView from './views/Admin/AdminView.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { // Kid Routes
      path: '/',
      name: 'kidshome',
      component: KidsHome
    },
    {
      path: '/login',
      name: 'kidsenter',
      component: KidsEnter
    },
    {
      path: '/help',
      name: 'kidshelp',
      component: KidsHelp
    },
    {
      path: '/lesson/:subject/:topicIndex/:index',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/:subject/exercise/:topicIndex/:index',
      name: 'exercise',
      component: Exercise
    },
    {
      path: '/:subject/quiz/:topicIndex/:index',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/profile',
      name: 'kidsprofile',
      component: KidsProfile
    },
    { // Parent Routes
      path: '/parent',
      name: 'parenthome',
      component: ParentHome
    },
    {
      path: '/parent/login',
      name: 'parententer',
      component: ParentEnter
    },
    {
      path: '/parent/help',
      name: 'parenthelp',
      component: ParentHelp
    },
    {
      path: '/parent/profile/:id',
      name: 'parentprofile',
      component: ParentProfile
    },
    {
      path: '/parent/progress/:childId/:subject/:topicIndex/:index/:progressId',
      name: 'parentprogress',
      component: ParentProgress
    },
    { // Admin Routes
      path: '/admin',
      name: 'adminhome',
      component: AdminHome
    },
    {
      path: '/admin/login',
      name: 'adminenter',
      component: AdminEnter
    },
    {
      path: '/admin/edit/:subject/:topicIndex/:index',
      name: 'adminedit',
      component: AdminEdit
    },
    {
      path: '/admin/view/:subject/:topicIndex/:index',
      name: 'adminview',
      component: AdminView
    },
    {
      path: '/admin/curriculum/:subject',
      name: 'adminlessonlist',
      component: AdminLessonsList
    },
    {
      path: '/admin/profile/:id',
      name: 'adminprofile',
      component: AdminProfile
    },
    {
      path: '/admin/progress/:childId/:subject/:topicIndex/:index/:progressId',
      name: 'adminprogress',
      component: AdminProgress
    },

  ]
})
