// import $axios from "../api"

import $axios from "../api";

const state = () => ({
   hasil: []
})

const mutations = {
   SET_HASIL(state, payload) {
      state.hasil = payload
   }
}

const actions = {
   getHasil({ commit }) {
      return new Promise((resolve) => {
         $axios.post(`/hasil`)
            .then(response => {
               commit('SET_HASIL', response.data.data)
               resolve(response.data)
            })
            .catch((error) => {
               commit('SET_ERRORS', error.response.data.errors, { root: true })
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