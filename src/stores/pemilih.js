import $axios from "../api"

const state = () => ({
   pemilihs: []
})

const mutations = {
   ASSIGN_DATA(state, payload) {
      state.pemilihs = payload
   }
}

const actions = {
   getPemilih({commit}) {
      return new Promise((resolve) => {
         $axios.get(`/pemilih`)
            .then(response => {
               commit('ASSIGN_DATA', response.data)
               resolve(response.data)
            })
            .catch((error) => {
               commit('SET_ERRORS', error.response.data.errors, { root: true })
            })
      })
   },
   truncatePemilih({ dispatch }) {
      return new Promise((resolve) => {
         $axios.post(`/truncate/token`)
            .then(() => {
               dispatch('getPemilih').then(() => resolve())
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