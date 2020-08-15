import $axios from "../api"

const state = () => ({
   pemilihs: [],
   page: 1
})

const mutations = {
   ASSIGN_DATA(state, payload) {
      state.pemilihs = payload
   },
   SET_PAGE(state, payload) {
      state.page = payload
   }
}

const actions = {
   getPemilih({ commit, state }, payload) {
      let search = typeof payload != 'undefined' ? payload:''
      return new Promise((resolve) => {
         $axios.get(`/pemilih?page=${state.page}&kode=${search}`)
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
         $axios.post(`/pemilih/truncate/token`)
            .then(() => {
               dispatch('getPemilih').then(() => resolve())
            })
      })
   },
   generateToken({ commit, dispatch }, payload) {
      return new Promise(resolve => {
         $axios.post('/pemilih', { jumlah:payload })
            .then(response => {
               commit('ASSIGN_DATA', response.data)
               dispatch('getPemilih').then(() => resolve())
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