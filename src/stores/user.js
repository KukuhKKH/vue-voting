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
         password: payload.password,
         password2: payload.password2
      }
   },
   CLEAR_FORM(state) {
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
   },
   submitUser({ dispatch, commit, state }) {
      return new Promise((resolve) => {
         if(state.user.password === state.user.password2) {
            $axios.post(`/users`, state.user)
               .then((response) => {
                  dispatch('getUsers').then(() => {
                     resolve(response.data.data)
                  })
               })
               .catch((error) => {
                  if (error.response.status == 400) {
                     commit('SET_ERRORS', error.response.data.errors, { root: true })
                  }
               })
         } else {
            commit('SET_ERRORS', {password: 'Password tidak sama'}, { root: true })
         }
      })
   },
   editUser({commit}, payload) {
      return new Promise((resolve) => {
         $axios.get(`/users/${payload}`)
            .then((response) => {
               commit('ASSIGN_FORM', response.data.data)
               resolve(response.data)
            })
      })
   },
   updateUser({ state, commit }, payload) {
      return new Promise((resolve) => {
         $axios.put(`/users/${payload}`, state.user)
            .then((response) => {
               commit('CLEAR_FORM')
               resolve(response.data)
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