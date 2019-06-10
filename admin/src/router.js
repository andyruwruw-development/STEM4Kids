import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import AdminTools from './views/Tools/AdminTools.vue'
import Profile from './views/Tools/Profile.vue'

import Staff from './views/Staff/Staff.vue'
import StaffProfile from './views/Staff/StaffProfile.vue'

import CheckIn from './views/Directory/CheckIn.vue'
import Directory from './views/Directory/Directory.vue'
import Reports from './views/Directory/Reports.vue'
import Report from './views/Directory/Report.vue'

import Curriculum from './views/Curriculum/Curriculum.vue'
import Subject from './views/Curriculum/Subject.vue'
import EditItem from './views/Curriculum/EditItem.vue'
import Item from './views/Curriculum/Item.vue'

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
      path: '/tools',
      name: 'admintools',
      component: AdminTools
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/staff/:location',
      name: 'staff',
      component: Staff
    },
    {
      path: '/staff/:username',
      name: 'staffprofile',
      component: StaffProfile
    },
    {
      path: '/checkin/:location',
      name: 'checkin',
      component: CheckIn
    },
    {
      path: '/directory/:location',
      name: 'directory',
      component: Directory
    },
    {
      path: '/reports/:location',
      name: 'reports',
      component: Reports
    },
    {
      path: '/report/:username/:subject/:topicIndex/:index',
      name: 'report',
      component: Report
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: Curriculum
    },
    {
      path: '/curriculum/:subject',
      name: 'subject',
      component: Subject
    },
    {
      path: '/curriculum/:subject/:topicIndex/:index',
      name: 'item',
      component: Item
    },
    {
      path: '/edit/:subject/:topicIndex/:index',
      name: 'edititem',
      component: EditItem
    },
  ]
})
