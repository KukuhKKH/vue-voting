import $axios from "../api";

const state = () => {}

const mutations = {}

const actions = {
   submit({commit}, payload) {
      localStorage.setItem('token', null)
      commit('SET_TOKEN', null, {root:true})
      return new Promise((res) => {
         $axios.post('/auth/login', payload)
            .then((response) => {
               if(response.data.messages == `Login Sukses`){
                  localStorage.setItem('token', response.data.token)
                  commit('SET_TOKEN', response.data.token, { root:true })
               } else {
                  commit('SET_ERRORS', { invalid: `Email/Password Salah`}, { root:true })
               }
               res(response.data.messages)
            })
            .catch((error) => {
               if(error.response.data.status == 'ERROR') {
                  commit('SET_ERRORS', error.response.data.messages, { root:true })
               }
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