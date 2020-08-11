import $axios from "../api"

const state = () => ({
   kandidats: [],
   avatar: {},

   kandidat: {
      id: '',
      nama:'',
      visi:'',
      misi:'',
      avatar:'',
      created_at:'',
      updated_at:''
   }
})

const mutations = {
   ASSIGN_DATA(state, payload) {
      state.kandidats = payload
   },
   ASSIGN_FORM(state, payload) {
      state.kandidat = {
         nama: payload.nama,
         visi: payload.visi,
         misi: payload.misi,
         avatar: payload.avatar
      }
   },
   CLEAR_FORM(state) {
      state.kandidat = {
         nama: '',
         visi: '',
         misi: '',
         avatar: ''
      }
   },
   SET_FILE(state, payload) {
      state.avatar = payload
   }
}

const actions = {
   getKandidats({commit}) {
      return new Promise((resolve) => {
         $axios.get(`/kandidat`)
            .then(response => {
               commit('ASSIGN_DATA', response.data)
               resolve(response.data)
            })
            .catch((error) => {
               commit('SET_ERRORS', error.response.data.errors, { root: true })
            })
      })
   },
   removeKandidat({ dispatch }, payload) {
      return new Promise((resolve) => {
         $axios.delete(`/kandidat/${payload}`)
            .then(() => {
               dispatch('getKandidats').then(() => resolve())
            })
      })
   },
   submitKandidat({ dispatch, commit }, payload) {
      console.log(payload)
      return new Promise((resolve) => {
         $axios.post(`/kandidat`, payload, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         })
            .then((response) => {
               dispatch('getKandidats').then(() => {
                  resolve(response.data.data)
               })
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  commit('SET_ERRORS', error.response.data.errors, { root: true })
               }
            })
      })
   },
   editKandidat({commit}, payload) {
      return new Promise((resolve) => {
         $axios.get(`/kandidat/${payload}`)
            .then((response) => {
               commit('ASSIGN_FORM', response.data.data)
               resolve(response.data)
            })
      })
   },
   updateKandidat({ state, commit }, payload) {
      const formData = new FormData()
      formData.append('file', state.kandidat.avatar)
      return new Promise((resolve) => {
         $axios.put(`/kandidat/${payload}`, state.kandidat)
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