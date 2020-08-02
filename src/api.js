import axios from 'axios'

const $axios = axios.create({
   baseURL: 'http://localhost:3000',
   headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token') != `null` ? localStorage.getItem('token') : ''
   }
})

export default $axios