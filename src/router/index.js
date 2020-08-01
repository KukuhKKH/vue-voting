import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store";
import Home from "../views/Home.vue"
import Login from "../views/Login"

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
