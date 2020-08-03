import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store";
import Home from "../views/Home.vue"
import Login from "../views/Login"

import IndexUser from "../views/user/Index"
import DataUser from "../views/user/User"
import AddUser from "../views/user/Add"
import EditUser from "../views/user/Edit"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user',
    component: IndexUser,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/user',
        name: 'User.data',
        component: DataUser,
        meta: { title: 'Manage User' }
      },
      {
        path: '/add',
        name: 'User.add',
        component: AddUser,
        meta: { title: 'Add User' }
      },
      {
        path: '/edit/:id',
        name: 'User.edit',
        component: EditUser,
        meta: { title: 'Edit User' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('CLEAR_ERRORS')
  if(to.matched.some(record => record.meta.requiresAuth)) {
    let auth = store.getters.isAuth
     if(!auth) {
       next({name:'Login'})
     } else {
       next()
     }
  }else {
    next()
  }
})

export default router
