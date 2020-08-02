import $axios from "../api";

const state = () => ({
   users: [],

   user: {
      id: '',
      name:'',
      email:'',
      password:'',
      created_at:'',
      updated_at:''
   }
})

const mutations = {
   ASSIGN_DATA(state, payload) {
      state.users = payload
   },
   ASSIGN_FORM(state, payload) {
      state.user = {
         name: payload.name,
         email: payload.email,
         password: payload.password
      }
   },
   CLEAR_FROM(state) {
      state.user = {
         name: '',
         email: '',
         password: ''
      }
   }
}

const actions = {
   getUsers({commit}) {
      // let search = typeof payload != 'undefined' ? payload: ''
      return new Promise((resolve) => {
         $axios.get(`/users`)
            .then(response => {
               commit('ASSIGN_DATA', response.data)
               resolve(response.data)
            })
            .catch((error) => {
               commit('SET_ERRORS', error.response.data.errors, { root: true })
            })
      })
   },
   removeUser({ dispatch }, payload) {
      return new Promise((resolve) => {
         $axios.delete(`/users/${payload}`)
            .then(() => {
               dispatch('getUsers').then(() => resolve())
            })
      })
   }
}

export default {
   namespaced: true,
   state,
   actions,
   mutations
}