import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/workoutbuilder',
    name: 'workoutbuilder',
    component: () => import(/* webpackChunkName: "workoutbuilder" */  '../views/workoutbuilder.vue')
  },
  {
    path: '/sleepcalculator',
    name: 'sleepcalculator',
    component: () => import(/* webpackChunkName: "sleepcalculator" */  '../views/sleepcalculator.vue')
  },
  {
    path: '/workoutmenager',
    name: 'workoutmenager',
    component: () => import(/* webpackChunkName: "workoutmenager" */  '../views/workoutmenager.vue')
  },
  {
    path: '/calorieintake',
    name: 'calorieintake',
    component: () => import(/* webpackChunkName: "calorieintake" */  '../views/CalorieIntakeCalculator.vue')
  },
  {
    path: '/workoutresult',
    name: 'workoutresult',
    component: () => import(/* webpackChunkName: "workoutresult" */  '../views/workoutresult.vue')
  },
  {
    path: '/bedtime',
    name: 'bedtime',
    component: () => import(/* webpackChunkName: "bedtime" */  '../views/bedtime.vue')
  },
  {
    path: '/wakeuptime',
    name: 'wakeuptime',
    component: () => import(/* webpackChunkName: "wakeuptime" */  '../views/wakeuptime.vue')
  },
  {
    path: '/workouttracker',
    name: 'workouttracker',
    component: () => import(/* webpackChunkName: "workouttracker" */  '../views/workouttracker.vue')
  },
  {
    path: '/caloriesresult',
    name: 'caloriesresult',
    component: () => import(/* webpackChunkName: "workouttracker" */  '../views/caloriesresult.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
